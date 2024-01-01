<template>
    <div class="data-container">
        <h2 class="title">Kiểm tra thông tin</h2>
        <p>Kiểm tra thông tin trích xuất trước khi lưu vào cơ sở dữ liệu</p>
        <div class="list-data">
            <div class="data-title">Thông tin chủ sở hữu</div>
            <div class="owner-data">
                <div class="content-item">
                    <p>Chủ sở hữu</p>
                    <textarea name="" v-model="ownerData[11]" id="" cols="30" rows="10"></textarea>
                </div>
                <div class="content-item">
                    <p>Năm sinh</p>
                    <textarea name="" v-model="ownerData[0]" id="" cols="30" rows="10"></textarea>
                </div>
                <div class="content-item">
                    <p>CMND số</p>
                    <textarea name="" v-model="ownerData[9]" id="" cols="30" rows="10"></textarea>
                </div>
                <div class="content-item">
                    <p>Địa chỉ thường trú</p>
                    <textarea name="" v-model="ownerData[10]" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div class="data-title">Thửa đất, nhà ở và tài sản khác gắn liền với đất</div>
            <div class="asset_data">
                
                <div class="co-title data-title ">1.Thửa đất</div>
                <div class="land_data">
                    <div class="content-item">
                        <p>a) Thửa đất số</p>
                        <textarea v-model="ownerData[7]" name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div class="content-item">
                        <p>b) Địa chỉ</p>
                        <textarea  v-model="ownerData[6]" cols="30" rows="10"></textarea>
                    </div>
                    <div class="content-item">
                        <p>c) Diện tích</p>
                        <textarea name="" v-model="ownerData[5]" id="" cols="30" rows="10"></textarea>
                    </div>
                  
                    <div class="content-item">
                        <p>Hình thức sử dụng</p>
                        <textarea name=""  v-model="ownerData[4]" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div class="content-item">
                        <p>Mục đích sử dụng</p>
                        <textarea name=""  v-model="ownerData[0]" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div class="content-item">
                        <p>Thời hạn sử dụng</p>
                        <textarea name=""  v-model="ownerData[3]" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div class="content-item">
                        <p>Nguồn gốc sử dụng</p>
                        <textarea name=""  v-model="ownerData[2]" id="" cols="30" rows="10"></textarea>
                    </div>
                  
                </div>
                <div class="data-title">Những thay đổi sau khi cấp giấy chứng nhận</div>
                <div>
                
                </div>
                <div class="data-title">Sơ đồ thửa đất</div>
                <div>
                    <img id="displayImage" :src="'data:image/jpeg;base64,' + ownerData[12]" alt="" style="max-width: 100%;">

                </div>
            </div>
            
        </div>
        <img src="../assets/icons/check_icn.svg" alt="" class="icon-check">
        <p>Hãy đảm bảo bạn đã kiểm tra đủ thông tin</p>
        <p>Tiếp tục thôi.</p>
        <div class="buttons-group">
            <button  class="button-back">BACK</button>
            <button class="button-continue" @click="save">SAVE</button>
            <a class="button-continue" href="http://localhost:8080/auth/exportAllExcel" >xuất excel</a>

        </div>
        <div class="buttons-group">
            <button  class="button-back">BACK</button>
          
        </div>
    </div>
</template>

<script>
import { useOwnerStore } from '../store';
import { computed } from 'vue';
import axios from 'axios';

const ownerStore = useOwnerStore();

export default {
  data() {
    return {
      ownerData: computed(() => ownerStore.getOwner),
    };
  },
  methods: {
    async save() {
      try {
        const user_id = localStorage.getItem('user_id');
        const requestData = {
          user_id: user_id,
          owner: this.ownerData[11],
          yob: this.ownerData[0],
          idcard: this.ownerData[9],
          owneraddress: this.ownerData[10],
          idcerti: this.ownerData[7],
          landplot: "",
          landaddress: this.ownerData[6],
          acreage: this.ownerData[5],
          uses: this.ownerData[4],
          dateuse: this.ownerData[3],
          originuse: this.ownerData[2],
          oldtree: "No",
          note: "This is another sample note",
          changecontent: "Updated landplot information",
          image: this.ownerData[12],
          house: "No",
          constructionorther: "No",
        };

        const response = await axios.post(
          'http://localhost:8080/auth/saveLandCertificate',
          requestData
        );

        console.log(response.data);
      } catch (error) {
        console.error('Error saving land certificate:', error);
      }
      this.$router.push({ name: 'success' });
    },

    async exportToExcel() {
      try {
        const user_id = localStorage.getItem('user_id');
        const requestData = {
          user_id: user_id,
          owner: this.ownerData[11],
          yob: this.ownerData[0],
          idcard: this.ownerData[9],
          owneraddress: this.ownerData[10],
          idcerti: this.ownerData[7],
          landplot: "",
          landaddress: this.ownerData[6],
          acreage: this.ownerData[5],
          uses: this.ownerData[4],
          dateuse: this.ownerData[3],
          originuse: this.ownerData[2],
          oldtree: "No",
          note: "This is another sample note",
          changecontent: "Updated landplot information",
          image: this.ownerData[12],
          house: "No",
          constructionorther: "No",
        };

        const response = await axios.get(
          'http://localhost:8080/auth/exportAllExcel',
          requestData
        );

      
      } catch (error) {
        console.error('Error exporting to Excel:', error);
      }
    },
  },
};
</script>
<style scoped>
.data-container {
    text-align: center;
    padding: auto 20px;
}
.title {
    font-weight: 550;
    font-size: 18px;
    padding-bottom: 30px;
}
.list-data {
    padding-top: 20px;
}
.data-title {
    padding: 5px;
    background: #71bef1;
    text-align: start;
    border-radius: 5px;
    color: #ffff;
}
.co-title {
    background-color: rgb(190, 228, 215);
}
.content-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    padding: 10px 0;
    min-height: 70px;
}
.content-item p {
    background-color: rgb(238, 234, 234);
    padding: 10px ;
    height: auto;
    width: 30%;
    border-radius: 5px;
}
.button-continue {
    padding: 10px 20px;
    background-color: #3498db;
    color: #ffff;
    width: 100px;
     text-align: center; 
    border-radius: 8px;
    box-shadow: -2px 1px 8px 5px;
}
.content-item textarea {
    border: 1px solid black;
    width: 57%;
    border-radius: 8px;
    height: 80px;
}
.icon-check {
    background-color: #3498db;
    border-radius: 50%;
    padding: 10px;
    margin: 20px auto 10px;
}
.buttons-group {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin: 20px auto;
}
.buttons-group button {
    padding: 6px 20px;
    border-radius: 8px;
}
.button-back {
    box-shadow: 0px 0px 2px 0px;
}
.button-save {
    background-color: #3498db;
    color: #ffff;
}
</style>