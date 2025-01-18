<script>
    import Hero from '@/components/Hero.vue';
    import MailForm from '@/components/MailForm.vue';

    export default {
        components: {
            Hero,
            MailForm
        }
    }
</script>

<template>
    <Hero />
    <MailForm />
    <h1 class="text-lg">toto je text z HomeView.vue</h1>
</template>