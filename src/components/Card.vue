<template>
    <div class="card">
        <div class="card-container">
            <div @click="sendId(id)" class="thumbnail" :style="{ 'background-image': 'url(' + coverPhoto + ')' }">
            </div>
            <div class="details">
                <!-- <a @click="sendId(id)"><h3>{{ name }}</h3></a> -->
                <router-link :to="'/home/' + id"><h3>{{ name }}</h3></router-link>
                <p class="author">{{ author }}</p>
                <country-flag :country="language"></country-flag>
                <p>ISBN: {{ isbn }}</p>
                <p>{{ pubDate }}</p>
                <!-- <p>Price: {{ book.price }}</p> -->
                <!-- <p>In 1km: {{ user.location }}</p> -->
                <star-rating class="star-rating" :star-size="20" v-model="rating" :read-only="true"></star-rating>
            </div>
        </div>
    </div>
</template>

<script>

import StarRating from 'vue-star-rating'
import CountryFlag from 'vue-country-flag'

export default {
    props: {
        id: String,
        name: String,
        author: String,
        isbn: String,
        language: String,
        pubDate: String,
        coverPhoto: String,
        rating: Number,
        country: String, 
    },
    methods: {
        setRating: function(val) {
            // this.rating = rating;
            console.log("Selected rate: ", val)
        },
        sendId(value) {
            console.log("Item id: ", value);
        }
    },
    data() {
        return {
            // rating: 4
        }
    },
    components: { StarRating, CountryFlag }
}
</script>

