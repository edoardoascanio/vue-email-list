new Vue({
    el: "#app",

    data: {
        mailList: [],
        mails: [],
        loading: false
    },

    methods: {
        getRandomEmails() {
            this.loading = true;
            this.mailList = [];

            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    axios.get("https://flynn.boolean.careers/exercises/api/random/int")
                        .then((resp) => {
                            let randomMail = resp.data.response;
                            this.mails.push(randomMail);

                            if (this.mail.length == 10){
                                this.mailList = [...this.mails]
                                this.loading = false
                            }

                        })
                },Math.floor(math.random()*1000))
            }
        }
    }

})