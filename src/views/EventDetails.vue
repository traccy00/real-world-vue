<template>
<!-- if we have an event, display this above detail -->
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
        <p>{{ event.description }}</p>
    </div>
</template>

<script>
import EventService from '@/services/EventService.js'
export default {
    //this for id in line 23 this.id
    //this fetch id in method getEvent(id) when API call
    props: ['id'],
    //create event object in component data
    data() {
        return {
            event: null,
        }
    },//after this created, we fetch data from database
    created() {
        //fetch event (by id) and set local data (for object event line 15)
        //call method getEnvent(id) of EventServices.js file

        // EventService.getEvent(this.$route.params.id)
        EventService.getEvent(this.id)
      .then(response => { 
         this.event = response.data//correspon with object event line 15
      })
      .catch(error => {console.log(error)
      })
    }
}
</script>