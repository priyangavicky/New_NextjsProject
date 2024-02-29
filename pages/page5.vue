<template>
    <div class="main-module">
       <div class="sub-contain w-100 d-flex gap-5 p-5">
         <div class="personal-box pb-1  w-25 p-3">
            <div class="personal-link d-flex gap-3 w-100 p-2">
                <div class="pen d-flex justify-content-center align-items-center p-3">
                  <i class="fa-solid fa-pencil text-white  fs-4"></i>
                </div>
            <p class="fs-4">Personal</p>
            </div>
         </div>
         <div class="personal-box p-3  w-100">
            <div class="d-flex p-3 line w-100">
            <div class="title-content-box w-100  p-2 d-flex align-items-center gap-3">
               <p class="fs-5">Welcome</p><h3 class="d-flex bol">VENKATACHALAM,<p class="fs-5 mt-2">Share a bit about yourself</p></h3>
            </div>
            <div class="title-content-box w-25  p-2 d-flex justify-content-end align-items-center gap-3">
               <div class="question"><i class="fa-solid fa-question text-white"></i></div><i class="fa-solid fa-ellipsis-vertical fs-3"></i>
            </div>
         </div>
         <div class="container trade-cont">
            <div class="row p-3">
               <div class="col-12 p-3 tb">
                  <p class="text-dark fs-5 fw-bold">Your trading experience</p>
                  <div class="trade-btn mt-3 d-flex flex-wrap gap-2">
                     <button class="btn-type">Less than 1 year</button>
                     <button class="btn-type">1-2 years</button>
                     <button class="btn-type1 text-white">2-5 years</button>
                     <button class="btn-type">5-10 years</button>
                     <button class="btn-type">10-20 years</button>
                     <button class="btn-type">20-25 years</button>
                     <button class="btn-type">More than 25</button>
                  </div>
               </div>
               <div class="col-12 tb p-3">
                  <p class="text-dark fs-5 fw-bold">Your annual income</p>
                  <div class="trade-btn mt-3 d-flex flex-wrap gap-2">
                     <button class="btn-type">Below 1 Lakh</button>
                     <button class="btn-type1 text-white">1L-8L</button>
                     <button class="btn-type">10L-25L</button>
                     <button class="btn-type">Above 25L</button>
                    
                  </div>
               </div>
               <div class="col-12  tb p-3">
                  <p class="text-dark fs-5 fw-bold">Your occupation</p>
                  <div class="trade-btn mt-3 d-flex flex-wrap gap-2">
                     <button class=" btn-type">Private sector</button>
                     <button class=" btn-type">Government service</button>
                     <button class=" btn-type">Public sector</button>
                     <button class=" btn-type">Agriculturist</button>
                     <button class=" btn-type">Professional</button>
                     <button class=" btn-type1 text-white">Business</button>
                     <button class=" btn-type">Housewife</button>
                     <button class=" btn-type">Retired</button>
                     <button class=" btn-type">Student</button>
                     <button class=" btn-type">Others</button>
                  </div>
               </div>
               <div class="col-12 cont-btn d-flex justify-content-center align-item-center p-3">
                  <NuxtLink class="btn otp-btn w-50" to="/page6">Continue</NuxtLink>
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
 .bol{
   font-weight: 600;
}
 .main-module{
    width: 100%;
    height: 720px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
 }
 .sub-contain{
    height: auto;
    background-color:rgb(253, 253, 240);
 }
 .personal-box{
    background-color: white;
    border-radius: 10px;
 }
 .pen{
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: rgb(81, 0, 157);
 }
 .personal-link{
    background-color: rgb(239, 234, 244);
    border-radius: 10px;
 }
 .personal-link p{
    color: rgb(81, 0, 157);
 }
.title-content-box {
   height: 60px;
}
.question{
    width: 30px;
    height: 30px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;

   
}
.line{
   border-bottom: 3px solid rgb(239, 234, 244);;
}
.trade-cont{
   width:60%;
}
.btn-type{
   border:1px solid rgb(185, 184, 184);
   border-radius: 20px;
   background-color:white;
   color: black;
   padding: 10px;
}
.btn-type1{
   border:1px solid rgb(185, 184, 184);
   border-radius: 20px;
   background-color:blueviolet;

   padding: 10px;
}
.two-trade{
background-color: blueviolet;
}
.tb{
   border-bottom: 2px solid rgb(185, 184, 184);
}
.otp-btn{
   border: none;
   padding: 2%;
   color: white;
   font-size: 20px;
   background-color: blueviolet;
   border-radius: 30px;
}
@media(max-width:992px){
   .main-module{
      align-items: start;
   }
   .pb-1{
      width: 100% !important;
   }
   .sub-contain{
      flex-wrap: wrap;
   }
   .trade-cont{
      width: 100%;
   }
}
</style>