<template>
    <div class="container">
        <section id="search">
            <h3>Search your book</h3>
            <div>
                <b-form @submit="onSearch">
                    <b-form-group id="book" label="Book name" label-for="book-name" description="To search book">
                        <b-form-input id="book-name" v-model="$v.form.name.$model" :state="validateState('name')" aria-describedby="name-feedback" placeholder="Book name, author"></b-form-input>
                        <b-form-invalid-feedback id="name-feedback">
                            This is a required field, Zee
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <b-button type="submit" variant="primary" :disabled="$v.form.$invalid">Search</b-button>
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
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
    mixins: [validationMixin],
    data() {
        return {
            form: {
                name: null,
            }
        }
    },
    validations: {
        form: {
            name: {
                required,
                minLength: minLength(2)
            }
        }
    },
    methods: {
        validateState(name) {
            const { $dirty, $error } = this.$v.form[name];
            return $dirty ? !$error : null;
        },
        onSearch() {
            this.$v.form.$touch();
            if (this.$v.form.$anyError) {
                return;
            }

            alert("Form submitted");
        }
    }
}
</script>