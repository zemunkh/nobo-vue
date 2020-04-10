<template>
    <section class="component">
        <h1>Explore book</h1>
        <div v-if="books.length" class="book-grid">
            <div v-for="book in books" v-bind:key="book.id">
                <card 
                  :id="book.id" 
                  :name="book.name" 
                  :author="book.author"
                  :language="book.language"
                  :isbn="book.isbn"
                  :pubDate="book.pubDate"
                  :coverPhoto="book.coverPhoto"
                  :rating="book.rating"></card>
            </div>
        </div>
    </section>
</template>

<script>

import Card from './Card.vue'

import firebase from 'firebase/app';
import 'firebase/firestore';


export default {
    beforeMount() {
        this.fetchBooks()
    },
    components: {
        Card
    },
    data() {
        return {
            book: {
                name: '',
                author: '',
                language: '',
                isbn: '',
                published_date: '',
                rating: 0,
                coverPhoto: ''
            },
            books: []
        }
    },
    methods: {
        fetchBooks() {
            const db = firebase.firestore()
            const booksCollection = db.collection('books')
            booksCollection.orderBy("name", "desc").limit(5).onSnapshot(querySnapshot => {
                querySnapshot.forEach(doc => {
                    let book = doc.data()
                    book.id = doc.id
                    var authors = book.author
                    book.author = (authors.join(", ")).toUpperCase();
                    var isbns = book.isbn
                    book.isbn = isbns.join(", ")
                    this.books.push(book)
                });
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    h1 {
       margin: 20px; 
    }
</style>