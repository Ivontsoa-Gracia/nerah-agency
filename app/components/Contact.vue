<template>
  <section
    id="contact"
    class="py-16 px-4 sm:px-8 lg:px-16 bg-[#e0e5ea] text-[#131629]"
  >
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12 fade-in">
        <h2 class="text-3xl sm:text-4xl font-bold text-[#131629] logo-type text-center mb-8" data-aos="fade-up">
          CONTACTEZ-NOUS
        </h2>
        <div class="mt-2 h-[2px] w-24 bg-secondary mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div class="lg:col-span-2 fade-in rounded-sm p-6 sm:p-8">
          <h3 class="text-2xl font-medium mb-4 text-[#131629]" data-aos="fade-up">
            Envoyez-nous un message
          </h3>
          <p class="text-[#131629]/80 mb-6" data-aos="fade-up">
            Vous avez un projet digital ou besoin d’un accompagnement créatif et
            technologique ? Contactez-nous pour en discuter !
          </p>

          <form @submit.prevent="sendMessage" class="space-y-4 sm:space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-up">
              <input
                v-model="form.user_name"
                type="text"
                placeholder="Votre nom"
                class="w-full px-4 py-3 rounded-sm shadow-sm bg-white/20 border border-gray-300 backdrop-blur-md text-[#131629] focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <input
                v-model="form.subject"
                type="text"
                placeholder="Sujet"
                class="w-full px-4 py-3 rounded-sm shadow-sm bg-white/20 border border-gray-300 backdrop-blur-md text-[#131629] focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-up">
              <input
                v-model="form.user_email"
                type="email"
                placeholder="Votre email"
                class="w-full px-4 py-3 rounded-sm shadow-sm bg-white/20 border border-gray-300 backdrop-blur-md text-[#131629] focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <div class="flex">
                <select
                  v-model="form.country_code"
                  class="px-4 py-3 shadow-sm bg-white/20 border border-gray-300 text-[#131629] rounded-l-sm focus:outline-none"
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
                  placeholder="Votre numéro"
                  class="w-full px-4 py-3 shadow-sm bg-white/20 border border-gray-300 backdrop-blur-md text-[#131629] rounded-r-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
            </div>

            <textarea
              v-model="form.message"
              placeholder="Votre message"
              rows="5"
              class="w-full px-4 py-3 rounded-sm shadow-sm bg-white/20 border border-gray-300 backdrop-blur-md text-[#131629] focus:outline-none focus:ring-2 focus:ring-secondary"
              data-aos="fade-up"
            ></textarea>

            <button
              type="submit"
              class="w-full py-3 text-[#e0e5ea] bg-[#131629] rounded-sm transition hover:bg-[#131629]/90"
              data-aos="fade-up"
            >
              Envoyer le message
            </button>
          </form>
        </div>

        <div class="fade-in lg:col-span-1">
          <div class="bg-[#131629] backdrop-blur-md rounded-sm p-6 sm:p-8 shadow-sm">
            <h3 class="text-xl font-bold mb-6 text-[#e0e5ea]" data-aos="fade-up">
              NOS COORDONNÉES
            </h3>
            <div class="space-y-6 texte">
              <ContactInfo
                icon="bxr  bx-headphone-mic"
                title="Support client"
                :texts="['+261 34 77 659 78', '+261 32 35 495 94']"
              />
              <ContactInfo
                icon="bxr  bx-message-dots"
                title="SMS / Whatsapp"
                :texts="['+261 34 77 659 78', '+261 32 35 495 94']"
              />
              <ContactInfo
                icon="bxr  bx-at"
                title="Email"
                :texts="['contact@nerahagency.com', 'nerahagency@gmail.com']"
              />
            </div>

            <div class="mt-6 texte">
              <div class="flex items-center z-50 space-x-4">
                <span class="text-[#e0e5ea] text-sm font-normal text-md" data-aos="fade-up">
                  SUIVEZ-NOUS
                </span>

                <div class="h-[2px] w-8 bg-[#e0e5ea]" data-aos="fade-up"></div>

                <div class="flex space-x-4" data-aos="fade-up">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    class="text-[#e0e5ea] text-2xl hover:text-[#8ac2f0] transition"
                  >
                    <i class="bx bxl-instagram"></i>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    class="text-[#e0e5ea] text-2xl hover:text-[#8ac2f0] transition"
                  >
                    <i class="bx bxl-linkedin"></i>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    class="text-[#e0e5ea] text-2xl hover:text-[#8ac2f0] transition"
                  >
                    <i class="bx bxl-facebook"></i>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    class="text-[#e0e5ea] text-2xl hover:text-[#8ac2f0] transition"
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
