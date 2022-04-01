<template>
    <v-snackbar
        :color="color"
        :timeout="timer"
        v-model="showSnackbar"
        top
        centered
    >
        <v-icon left>mdi-{{icon}}</v-icon>{{message}}
    </v-snackbar>
</template>

<script>
export default {
    name: "VToast",
    data() {
        return{
            showSnackbar: false,
            message: '',
            color: 'success',
            icon: 'mdi-check',
            timer: 3000
        }
    },
    methods:{
        show(data) {
            this.message = data.message || 'missing "message".'
            this.color = data.color || 'success'
            this.timer = data.timer || 3000
            this.icon = data.icon || 'mdi-check'
            this.showSnackbar = true
        }
    }
}
</script>
