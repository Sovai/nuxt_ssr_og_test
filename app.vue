<template>
  <div>
    <button @click="creaeQuotation">Create</button>
    <h1>Quotations</h1>
    <ul>
      <li v-for="quote in quotations" :key="quote.id">
        {{ quote.description }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const quotations = ref([]);

onMounted(async () => {
  const { $supabase } = useNuxtApp();
  const { data, error } = await $supabase.from("quotations").select("*");

  // createUser({
  //   email: "sovai@email.com",
  //   name: "Sovai",
  //   password: "password",
  // });

  fetchAllUsers();

  if (error) {
    console.error("Error fetching quotations:", error);
  } else {
    quotations.value = data;
  }
});

async function createUser({ email, name, password }) {
  const { $supabase } = useNuxtApp();
  const { data, error } = await $supabase
    .from("users")
    .insert([{ email, name, password }]);

  if (error) {
    console.error("Error creating feature scope:", error);
  } else {
    console.log("Feature scope created:", data);
  }
}

async function createFeatureScope({ userId, projectName, description }) {
  const { $supabase } = useNuxtApp();
  const { data, error } = await $supabase
    .from("feature_scopes")
    .insert([
      { user_id: userId, project_name: projectName, description: description },
    ]);

  if (error) {
    console.error("Error creating feature scope:", error);
  } else {
    console.log("Feature scope created:", data);
  }
}

async function fetchQuotations(userId) {
  const { $supabase } = useNuxtApp();
  const { data, error } = await $supabase
    .from("quotations")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    console.error("Error fetching quotations:", error);
  } else {
    return data;
  }
}

async function fetchAllUsers() {
  const { $supabase } = useNuxtApp();
  const { data, error } = await $supabase.from("users").select("*");

  if (error) {
    console.error("Error fetching users:", error);
  } else {
    return data;
  }
}
</script>
