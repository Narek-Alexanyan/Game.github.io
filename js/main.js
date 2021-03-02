



        new Vue({
    el: '#app',
    data: {
        seen: false,
        circleSeen: false,
        burger: false,
        active: false,
        firstLang: 'eng',
        languages: [
            {lang: 'rus'},
            {lang: 'fra'},
            {lang: 'deu'},
        ],
        styleObject: {
            height: '0px',
            transitionProperty: 'all',
            transitionDelay: '0.3s'
        },
        circleColor: {
            background: '',
            transitionProperty: 'all',
            transitionDelay: '0.3s'
        },
        classObject: {
            isActive: false,
        }
    },
    methods: {
        langBox: function () {
            if(this.seen == true) {
                this.seen = false
            }else {
                this.seen = true
            }
        },
        circle: function () {
            if(this.circleSeen == true) {
                this.circleSeen = false
                this.circleColor.background = ''
                this.styleObject.height = '0px'
            }else {
                this.circleSeen = true
                this.circleColor.background = '#fff'
                this.styleObject.height = '120px'
            }
        },
        burgerPopUp: function () {
            if (this.burger == false) {
                this.burger = true
                this.classObject.isActive = true
            }else {
                this.burger = false
                this.classObject.isActive = false
            }
            
        }
        
    },
    computed: {
        
    },
})












