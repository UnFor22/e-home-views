<template>
    <div>
        <Header></Header>
        <SideBar></SideBar>
        <AppMain></AppMain>
    </div>
</template>

<script>
    import Header from '@/components/header'
    import SideBar from '@/components/SideBar'
    import AppMain from './AppMain'
    export default {
        components: {
            Header,
            SideBar,
            AppMain
        }
    }
</script>

<style scoped>

</style>