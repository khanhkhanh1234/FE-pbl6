<template>
    <div class="success-container">
      <h2 class="title">Backup Successful</h2>
      <p>Your data has been successfully backed up.</p>
      <!-- <img src="../assets/icons/success_icn.svg" alt="Success Icon" class="icon-success"> -->
      <router-link to="/" class="button-back">Go Back</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Success',
  };
  </script>
  
  <style scoped>
  .success-container {
    text-align: center;
    padding: 20px;
  }
  
  .title {
    font-weight: 550;
    font-size: 18px;
    padding-bottom: 20px;
  }
  
  .icon-success {
    width: 50px;
    height: 50px;
    margin-top: 20px;
  }
  
  .button-back {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #3498db;
    color: #ffffff;
    text-decoration: none;
    border-radius: 8px;
  }
  </style>