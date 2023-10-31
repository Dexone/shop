<script setup>
import axios from "axios"
import {ref} from "vue"
axios.get("http://localhost:3000/products").then((res)=>{
  console.log(res.data)
}
)
</script>
