<template>
  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
    <router-link
      to="/patients"
      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
    >
      <!-- Heroicon name: outline/support -->
      <font-awesome-icon icon="baby" />
      <div class="ml-4">
        <p class="text-base font-medium text-gray-900">Les nourissons</p>
        <p class="mt-1 text-sm text-gray-500">
          A la naissance, le nourrisson a déjà subit d'importantes contraintes
          sur l'ensemble de son corps.
        </p>
      </div>
    </router-link>

    <router-link
      to="/patients"
      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
    >
      <!-- Heroicon name: outline/bookmark-alt -->
      <font-awesome-icon icon="child" />
      <div class="ml-4">
        <p class="text-base font-medium text-gray-900">
          Les enfants et adolescents
        </p>
        <p class="mt-1 text-sm text-gray-500">
          On peut retrouver chez l’enfant des motifs de consultation plus
          spécifiques tel que des troubles de la concentration et du sommeil.
        </p>
      </div>
    </router-link>

    <router-link
      to="/patients"
      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
    >
      <!-- Heroicon name: outline/calendar -->
      <font-awesome-icon icon="female" />
      <div class="ml-4">
        <p class="text-base font-medium text-gray-900">Les femmes enceintes</p>
        <p class="mt-1 text-sm text-gray-500">
          La femme enceinte peut souffrir de tout type de mal-être dû
          principalement à la grossesse.
        </p>
      </div>
    </router-link>

    <router-link
      to="/patients"
      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
    >
      <!-- Heroicon name: outline/shield-check -->
      <font-awesome-icon icon="blind" />
      <div class="ml-4">
        <p class="text-base font-medium text-gray-900">Les adultes</p>
        <p class="mt-1 text-sm text-gray-500">
          Le patient le plus général peut souffrir de stress, mauvaises
          positions, faux mouvements, traumatismes...
        </p>
      </div>
    </router-link>
    <router-link
      to="/patients"
      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
    >
      <!-- Heroicon name: outline/shield-check -->
      <font-awesome-icon icon="walking" />
      <div class="ml-4">
        <p class="text-base font-medium text-gray-900">Les séniors</p>
        <p class="mt-1 text-sm text-gray-500">
          De la vie active à la retraite, le sénior va devoir faire face un
          changement de rythme inévitable et il n'est pas rare, en effet, de
          voir apparaître de nouveaux symptômes.
        </p>
      </div>
    </router-link>
    <router-link
      to="/patients"
      class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
    >
      <!-- Heroicon name: outline/shield-check -->
      <font-awesome-icon icon="running" />
      <div class="ml-4">
        <p class="text-base font-medium text-gray-900">Les sportifs</p>
        <p class="mt-1 text-sm text-gray-500">
          Le sportif peut aussi avoir des douleurs particulières dû à la forte
          activité physique. Mais aussi, il peut avoir besoin d'un bilan avant
          une activité.
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>