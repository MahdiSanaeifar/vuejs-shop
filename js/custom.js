new Vue({
    el: '#app',
    data: {
        IsShowLoginSection: true,
        IsShowRegisterSection: false,
        LoginTips: [
            "موارد مربوط به ورود 1",
            "موارد مربوط به ورود 2",
            "موارد مربوط به ورود 3",
            "موارد مربوط به ورود 4",
            "موارد مربوط به ورود 5",
        ],
        RegisterTips: [
            "موارد مربوط به ثبت نام 1",
            "موارد مربوط به ثبت نام 2",
            "موارد مربوط به ثبت نام 3",
            "موارد مربوط به ثبت نام 4",
            "موارد مربوط به ثبت نام 5",
        ],
        UserName: ''
    },
    methods: {
        ShowRegisterSection: function () {
            this.IsShowLoginSection = false;
            this.IsShowRegisterSection = true;
        },
        ShowLoginSection: function () {
            this.IsShowLoginSection = true;
            this.IsShowRegisterSection = false;
        },
        CheckUserName: function () {

            console.log(this.$refs);

            var input = this.$refs.UserNameInput;

            var input2 = document.querySelector('[ref="UserNameInput"]');

            if (this.UserName === '') {
                input.classList.remove('success');
                input.classList.add('error');
            } else {
                input.classList.remove('error');
                input.classList.add('success');
            }
        }
    },
    watch: {
        UserName: function () {
            this.CheckUserName();
        }
    },
});