import hello from "./hello.js";

export default {
    data: function () {
        return {
            message: 'hello',
            foo: 'abc'
        }
    },
    created: function () {
        this.hello()
    },
    methods: {
        hello: function () {
            console.log('hello from mixin!')
            hello.hello();
            console.log(this.bar);
        }
    }
}
