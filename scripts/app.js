const app = Vue.createApp({
    data() {
        return {
            firstName: ' ',
            lastName: ' ',
            quantity: 0,
            pricePerItem: 10
        };
    }, //end of data properties

    computed: {
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        totalPrice() {
            return this.quantity * this.pricePerItem;
        }
    }, //end of computed properties

    methods: {
        clearFields() {
            this.firstName = '';
            this.lastName = '';
            this.quantity = 0;
        }
    } //end of method

});
app.mount('#app');