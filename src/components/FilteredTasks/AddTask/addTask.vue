<template>
  <div>  
    <v-btn 
        class="ma-2 white--text"                
        color="primary"
        elevation="2"          
        @click="activeModal()"              
      >
        Adicionar nova tarefa
    </v-btn> 
    <br>      
    <br>       
      <v-dialog 
        v-model="addTask"      
      >    
        <v-card class="pa-10" outlined shaped> 
          <ModalTaskInfo     
                :editItem='taskDefault'
                label='Adicionar tarefa:'
                @save="save()"
                @modalVisible="changeAddTask()"/>
        </v-card>
      </v-dialog>        
  </div>
</template>

<script>

import {mapMutations} from 'vuex'
import ModalTaskInfo from '../../common/modal/modalTaskInfo.vue'


export default {  

    

  components: {
    ModalTaskInfo
  },  

  data: () => ({        
    addTask: false,    
    menu: false,
    modal: false,
    menu2: false,    
    taskDefault: {
      name: '',
      date: '',
      description: '',
      done: false
    }
  }),

  methods: {
    ...mapMutations([
      'addNewTask'
    ]),
    
    activeModal: function (){                  
      this.addTask = true
      console.log(61, this.taskDefault)
      },
    
    changeAddTask: function () {       
      this.addTask = !this.addTask 
      },
    
    save: function () {      
      this.addTask = false;                  
      this.addNewTask()       
    },    
  }
  
}
</script>
