<template>
<!-- give EventDetails access to params as a prop -->
  <router-link class="event-link" :to="{ name: 'EventDetails', params: {id: event.id } }">
    <!-- <span>Event #{{ $router.params.id }}</span> -->
    <div class="event-card">
      <span>@ {{ event.time }} on {{ event.date }}</span>
      <h4>{{ event. title }} </h4>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.event-card {
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  padding: 20px;
}

.event-card:hover {
  transform: scale(1.010);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
/* router link */
.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
