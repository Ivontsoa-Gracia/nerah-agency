<template>
  <section
    id="contact"
    class="py-20 px-4 sm:px-8 lg:px-16 bg-[#131629] text-white"
  >
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16 fade-in">
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-bold logo-type text-[#e0e5ea]"
        >
          CONTACTEZ-NOUS
        </h2>
        <div class="mt-2 h-[2px] w-24 bg-secondary mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div
          class="lg:col-span-2 fade-in rounded-lg p-8 bg-[#1a2030]/50 backdrop-blur-md shadow-lg"
        >
          <h3 class="text-2xl font-bold mb-4 text-[#e0e5ea]">
            Envoyez-nous un message
          </h3>
          <p class="text-gray-300 mb-6">
            Vous avez un projet digital ou besoin d’un accompagnement créatif et
            technologique ? Contactez-nous pour en discuter !
          </p>

          <form @submit.prevent="sendMessage" class="space-y-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <input
                v-model="form.user_name"
                type="text"
                placeholder="Votre nom"
                class="w-full px-4 py-3 rounded-lg bg-[#e0e5ea]/10 backdrop-blur-md text-white focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <input
                v-model="form.subject"
                type="text"
                placeholder="Sujet"
                class="w-full px-4 py-3 rounded-lg bg-[#e0e5ea]/10 backdrop-blur-md text-white focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <input
                v-model="form.user_email"
                type="email"
                placeholder="Votre email"
                class="w-full px-4 py-3 rounded-lg bg-[#e0e5ea]/10 backdrop-blur-md text-white focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <div class="flex">
                <select
                  v-model="form.country_code"
                  class="px-4 py-3 bg-[#e0e5ea]/40 text-white rounded-l-lg focus:outline-none"
                >
                  <option
                    v-for="country in countries"
                    :key="country.code"
                    :value="country.code"
                  >
                    {{ country.code }}
                  </option>
                </select>
                <input
                  v-model="form.phone_number"
                  type="text"
                  placeholder="Votre numéro de contact"
                  class="w-full px-4 py-3 bg-[#e0e5ea]/10 backdrop-blur-md text-white rounded-r-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
            </div>

            <textarea
              v-model="form.message"
              placeholder="Votre message"
              rows="5"
              class="w-full px-4 py-3 rounded-lg bg-[#e0e5ea]/10 backdrop-blur-md text-white focus:outline-none focus:ring-2 focus:ring-secondary"
            ></textarea>

            <button
              type="submit"
              class="w-full py-3 text-[#e0e5ea] border border-[#e0e5ea] rounded-full transition hover:bg-[#e0e5ea]/10"
            >
              Envoyer le message
            </button>
          </form>
        </div>

        <div class="fade-in lg:col-span-1">
          <div
            class="bg-[#1a2030]/50 backdrop-blur-md rounded-lg p-8 shadow-lg"
          >
            <h3 class="text-xl font-bold mb-6 text-[#e0e5ea]">
              NOS COORDONNÉES
            </h3>
            <div class="space-y-6 texte">
              <ContactInfo
                icon="fas fa-headset"
                title="Support client"
                :texts="['+261 34 77 650 78', '+261 32 35 495 94']"
              />
              <ContactInfo
                icon="far fa-comment-dots"
                title="SMS / Whatsapp"
                :texts="['+261 34 77 650 78', '+261 32 35 495 94']"
              />
              <ContactInfo
                icon="far fa-envelope"
                title="Email"
                :texts="['contact@nerahagency.com', 'nerahagency@gmail.com']"
              />
            </div>

            <div class="mt-8 texte">
              <div class="flex items-center z-50 space-x-4">
                <span class="text-[#e0e5ea] text-sm font-normal text-md">
                  SUIVEZ-NOUS
                </span>

                <div class="h-[2px] w-12 bg-[#e0e5ea]"></div>

                <div class="flex space-x-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    class="text-[#e0e5ea] text-2xl hover:text-[#ffffff] transition"
                  >
                    <i class="bx bxl-instagram"></i>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    class="text-[#e0e5ea] text-2xl hover:text-[#ffffff] transition"
                  >
                    <i class="bx bxl-linkedin"></i>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    class="text-[#e0e5ea] text-2xl hover:text-[#ffffff] transition"
                  >
                    <i class="bx bxl-facebook"></i>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    class="text-[#e0e5ea] text-2xl hover:text-[#ffffff] transition"
                  >
                    <i class="bx bxl-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";
import ContactInfo from "~/components/ContactInfo.vue";

const form = ref({
  user_name: "",
  subject: "",
  user_email: "",
  country_code: "+261",
  phone_number: "",
  message: "",
});

const countries = [
  { name: "Madagascar", code: "+261" },
  { name: "France", code: "+33" },
  { name: "USA", code: "+1" },
  { name: "UK", code: "+44" },
  { name: "Canada", code: "+1" },
  { name: "Germany", code: "+49" },
];

const sendMessage = () => {
  emailjs
    .send(
      "service_ffqn8mh",
      "template_wx6ins7",
      { ...form.value, to_email: "nerahagency@gmail.com" },
      "akYl9oE4JxsjGpJBp"
    )
    .then(() => {
      alert("Message envoyé avec succès !");
      form.value = {
        user_name: "",
        subject: "",
        user_email: "",
        country_code: "+261",
        phone_number: "",
        message: "",
      };
    })
    .catch((error) => {
      alert("Une erreur est survenue, veuillez réessayer.");
      console.error(error);
    });
};
</script>

<style scoped>
.logo-type {
  font-family: "Pirulen", sans-serif;
  letter-spacing: 2px;
  font-weight: normal;
}

.texte {
  color: #e0e5ea;
  letter-spacing: 1px;
  font-family: "Helvetica", sans-serif;
}
</style>
