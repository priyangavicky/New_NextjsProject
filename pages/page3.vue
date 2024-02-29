<template>
    <div class="main-module">
       <div class="sub-contain w-100 d-flex justify-content-center align-items-center">
         <div class="form-box bg-white p-3 ">
            <div class="container">
                <div class="row">
                    <div class=" col-lg-12 p-3 title ">
                        <h1 class="text-center">Let's get started</h1>
                        <div class="question"><i class="fa-solid fa-question text-white"></i></div>
                    </div>
                    <div class=" col-lg-6 col-md-12 p-3 log mt-1">
                        <h3 class="fs-5">Add your email address</h3>
                        <p class="para mt-3">We need your email address to send your account related updates</p>
                       <div class="try-otp  mt-4" >
                        <h3 class=" fs-5">Enter your email</h3>                       </div>
                        <input type="text" class="mt-2 w-100 p-2 num-box">
                        <div class="d-grid mt-5">
                            <NuxtLink class="btn otp-btn btn-lg p-2 mt-5" to="/page4">Verify with OTP</NuxtLink >
                        </div>
                    </div>
                    <div class=" col-lg-6 col-md-12 p-3 mt-1 log-2">
                        <p class="fs-6 text-dark fw-bold pl-3">Login with QR code</p>
                    </div>
                </div>
            </div>
         </div>
       </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
 *{
    margin:0%;
    padding: 0%;
    list-style-type: none;
    box-sizing: border-box;
   
 }
 .main-module{
    width: 100%;
    height: 695px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
 }
 .form-box{
    border-radius: 10px;
 }


 .question{
    width: 30px;
    height: 30px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
float: right;
margin-top: -4%;
   

 }
 .sub-contain{
    height: 550px;
    background-color:rgb(253, 253, 240);
 }
 .para{
    color: gray;
 }
 .num-box{
    border: none;
    border-bottom: 2px solid blueviolet;
    
 }
 .num-box:focus{
    outline: none;
 }
 .otp-btn{
    color:rgb(169, 169, 169);
    background-color: rgb(231, 227, 227);
    font-weight: bold;
    border-radius: 20px;
    
 }
 .otp-btn:hover{
    color: aliceblue;
    background-color: blueviolet;
 }
 .title{
    border-bottom: 1px solid rgb(212, 212, 212);
 }
 .log{
    border-right: 1px solid rgb(212, 212, 212);
 }
 @media(max-width:991px){
    .log{
    border-right: none;
 }
 .log-2{
    border-top:1px solid rgb(212, 212, 212) ;
 }
 }
</style>