<template>
<div>
    <div class="search">
        <slot name="search"></slot>
    </div>
    <div class="form">
        <slot name="form"></slot>
    </div>

</div> 
</template>


<style scoped>
.search{
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    padding:20px;
    margin: 20px 0;

}

.form{
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
    padding:20px;
    margin-bottom:40px;
}

</style>

