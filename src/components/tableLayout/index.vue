<template>
<div>
    <div class="search">
        <slot name="search"></slot>
    </div>
    <div class="form">
        <slot name="form">
            <slot></slot>
            <slot name="page" class="page"></slot>
        </slot>
    </div>

</div> 
</template>


<style >
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

.page{
    text-align: right;
    padding-top: 20px;
}

</style>

