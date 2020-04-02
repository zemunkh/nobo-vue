<template>
    <section>
        <h1 class="title-component">Book grid</h1>
        <div class="book-grid">
            <div class="card">
                <div class="card-container">
                    <div class="thumbnail" style="background-image:url('https://external-preview.redd.it/UPU6UNCJdFNfBmyjNpPY9bFbOAAFAw25NDDS8lixbWM.jpg?width=640&crop=smart&auto=webp&s=73334180b5734967ac9053103d6e14467d8f0513')">
                    </div>
                    <div class="details">
                        <h3>Өнүдэр</h3>
                        <p>Author</p>
                        <p>Country</p>
                        <p>ISBN: 994400044</p>
                        <p>Price: 9090$</p>
                        <p>Range: 3.5km</p>
                        <star-rating :star-size="14" v-model="rating"></star-rating>
                    </div>
                </div>
            </div>
            <div class="card" style="background-image:url('https://images.unsplash.com/photo-1551024739-78e9d60c45ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80')">
                2
            </div>
            <div class="card" style="background-image:url('https://images.unsplash.com/photo-1539811107033-3a67f3ebc852?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80')">
                3
            </div>
            <div class="card" style="background-image:url('https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&auto=format&fit=crop&w=351&q=80')">
                4
            </div>
            <div class="card" style="background-image:url('https://images.unsplash.com/photo-1539811107033-3a67f3ebc852?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80')">
                5
            </div>
            <div class="card" style="background-image:url('https://images.unsplash.com/photo-1551024739-78e9d60c45ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80')">
                6
            </div>
            <div class="card" style="background-image:url('https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&auto=format&fit=crop&w=351&q=80')">
                7
            </div>
            <div class="card" style="background-image:url('https://images.unsplash.com/photo-1500336624523-d727130c3328?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')">
                8
            </div>
        </div>
    </section>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
    components: {
        StarRating
    },
    data() {
        return {
            rating: 4,
        };
    }

}
</script>
