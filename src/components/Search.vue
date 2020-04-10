<template>
    <div class="form-container">
        <section id="search">
            <h3>Search your book</h3>
            <div>
                <b-form @submit="onSearch">
                    <b-form-group id="book" label="Book name" label-for="book-name" description="To search book">
                        <b-form-input id="book-name" v-model="form.name" placeholder="Book name, author"></b-form-input>
                    </b-form-group>
                    <div>
                        <label for="example-datepicker">Choose a date</label>
                        <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
                        <p>Value: '{{ value }}'</p>
                    </div>

                    <b-button type="submit" variant="primary" :disabled="!nameIsValid">Search</b-button>

                </b-form>
            </div>
        </section>
        <section id="primary">
            <h1>Your Personal Assistant</h1>
            <p>Get help with your daily life stuffy.</p>
            <a href="#">Get help already</a>
        </section>
    </div>
</template>


<script>


export default {
    data() {
        return {
            form: {
                name: '',
            },
            value: ''
        }
    },
    computed: {
        nameIsValid () {
            return this.form.name.length > 1 
        }
    },
    methods: {
        onSearch() {
            console.log("Form data:", this.form.name)
        }
    }
}
</script>




