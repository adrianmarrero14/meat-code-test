<template>
    <button><p><slot></slot></p></button>
</template>
<style scoped>
button {
    background: #D8AD3D;
    color: white;
    border-radius: 50px;
    width: 170px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
}
p{
    margin: 0;
}

</style>