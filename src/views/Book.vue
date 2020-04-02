<template>
    <div class="content">
        <div class="book-container">
            <div id="cover">
                <div class="thumbnail">
                    <img :src="book.coverPhoto" alt=""><br>
                    <div class="star-rating">
                        <h5>Rate this book</h5>
                        <star-rating  :star-size="32" v-model="book.rating" :read-only="true"></star-rating>
                    </div>
                </div>
            </div>
            <div id="details">
                <div class="details-container">
                    <h3>{{ book.name }}</h3>
                    <div>
                        <p><strong>Author:</strong> <span class="author">{{ book.author }}</span></p>
                    </div>

                    <country-flag :country="book.language"></country-flag>
                    <p><strong>ISBN: </strong>{{ book.isbn }}</p>
                    <p><strong>Published date: </strong>{{ book.published_date }}</p>
                    <!-- <p>Price: {{ book.price }}</p> -->
                    <!-- <p>In 1km: {{ user.location }}</p> -->
                    <p>Check In</p><p>Check Out</p>
                    <p>Price: 1000</p>
                    <div class="buttons">
                        <button v-b-hover="wishHover" @click="addWishList" class="wish-btn">
                            <b-icon v-if="isWish" icon="heart-fill" class="icon"></b-icon>
                            <b-icon v-else icon="heart" class="icon"></b-icon>
                            <span> TO WISHLIST</span></button>
                        <button v-b-hover="orderHover" @click="orderBook" class="order-btn">
                            <b-icon v-if="isOrder" icon="folder-check" class="icon"></b-icon>
                            <b-icon v-else icon="gem" class="icon"></b-icon>
                            <span> ORDER </span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import StarRating from 'vue-star-rating'
import CountryFlag from 'vue-country-flag'

// Add mobile responsive feature && design update for 

import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
    beforeMount() {
        this.fetchBook(this.$route.params.id)
    },
    methods: {
        setRating: function(val) {
            // this.rating = rating;
            console.log("Selected rate: ", val)
        },
        fetchBook(book_id) {
            const db = firebase.firestore()
            const booksCollection = db.collection('books')
            booksCollection.doc(book_id).onSnapshot(doc => {
                let b = doc.data();
                var authors = b.author
                b.author = (authors.join(", ")).toUpperCase();
                var isbns = b.isbn
                b.isbn = isbns.join(", ")
                this.book = b;
            });
        },
        wishHover(hovered) {
            this.isWish = hovered
        },
        orderHover(hovered) {
            this.isOrder = hovered
        },
        addWishList() {

        },
        orderBook() {

        },
    },
    data() {
        return {
            isWish: false,
            isOrder: false,
            book: {
                name: 'Хар нүдэн лам',
                author: 'AZaa',
                language: 'gb',
                isbn: '978383809',
                published_date: '2018',
                rating: 4,
                // coverPhoto: 'https://external-preview.redd.it/UPU6UNCJdFNfBmyjNpPY9bFbOAAFAw25NDDS8lixbWM.jpg?width=640&crop=smart&auto=webp&s=73334180b5734967ac9053103d6e14467d8f0513'
                coverPhoto: 'https://data.internom.mn/media/images//9780062888433.jpg'
            }
        }
    },
    components: { StarRating, CountryFlag },

}
</script>