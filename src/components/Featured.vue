<template>
  <div class="py-12 bg-white mobile-margin">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center flex direction items-center">
        <h2
          class="text-base text-logo-blue font-semibold tracking-wide uppercase"
        >
          L'Ostéopathie
        </h2>
        <p
          class="mt-6 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          Générale - Viscérale - Crânienne
        </p>
        <p class="mt-10 mb-10 max-w-4xl text-lg text-gray-500 lg:mx-auto">
          Dans son cabinet ou à domicile, Charles Dumeige prend en charge tout
          type de patient.
        </p>
        <router-link
          to="/patients"
          target="_blank"
          class="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-logo-blue bg-logo-blue-light md:py-4 md:text-lg md:px-10"
        >
          Apprenez plus sur les patients pris en charge.
        </router-link>
      </div>

      <div class="values-grid">
        <dl
          class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-10"
        >
          <div class="flex">
            <div class="flex-shrink-0">
              <div
                class="flex items-center justify-center h-12 w-12 rounded-md bg-logo-blue text-white"
              >
                <!-- Heroicon name: outline/globe-alt -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                A l'écoute du patient
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Une attitude active dans l'approche relationnelle avec le
                patient, toujours à l'écoute et disponible.
              </dd>
            </div>
          </div>

          <div class="flex">
            <div class="flex-shrink-0">
              <div
                class="flex items-center justify-center h-12 w-12 rounded-md bg-logo-blue text-white"
              >
                <!-- Heroicon name: outline/scale -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                "Un mal pour un bien"
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Suivant l'algie du patient, il se peut qu'il ressente des
                douleurs durant la séance mais qui finissent par aboutir à un
                sentiment de bien-être à la fin de la consultation.
              </dd>
            </div>
          </div>

          <div class="flex">
            <div class="flex-shrink-0">
              <div
                class="flex items-center justify-center h-12 w-12 rounded-md bg-logo-blue text-white"
              >
                <!-- Heroicon name: outline/lightning-bolt -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Résultats rapides
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Il faut en moyenne 2 à 3 jours de récupération après une séance
                pour voir les douleurs s'atténuer complétement.
              </dd>
            </div>
          </div>
          <div class="flex">
            <div class="flex-shrink-0">
              <div
                class="flex items-center justify-center h-12 w-12 rounded-md bg-logo-blue text-white"
              >
                <!-- Heroicon name: outline/annotation -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Notifications mobiles
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Disponible par téléphone & email pour les contacts directs.
                Prise de rendez-vous possible sur
                <a
                  href="https://www.doctolib.fr/osteopathe/meaux/charles-dumeige"
                  id="docto-link"
                  >doctolib.fr</a
                ><br />
                <span id="extra">Au cabinet ou à domicile.</span>
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.type:hover {
  color: #3abfd6;
  font-weight: 900;
}

#docto-link:hover {
  color: #3abfd6;
  text-decoration: underline;
}

.patients-link {
  background-color: #3abfd6;
  padding: 1%;
  border-radius: 0.5em;
  color: white;
}

.patients-link:hover {
  background-color: white;
  color: #3abfd6;
  box-shadow: 1px 1px 12px #555;
}

#extra {
  font-size: 0.8em;
  font-weight: bolder;
}

.values-grid {
  margin-top: 5em;
}

.direction {
  flex-direction: column;
}
</style>
