<template>
    <v-navigation-drawer
      v-model="status"
      absolute
      temporary
      :clipped="false"
      enable-resize-watcher

    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{ $auth.user().name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-group
          prepend-icon="account_balance"
          no-action
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>
              Quizzes
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile
            :to="{ name: 'quiz.create' }"
          >
            <v-list-tile-action>
              <v-icon>view_list</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title
              >
                Create Quiz
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

      </v-list>
    </v-navigation-drawer>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TheSidebar',
  data() {
    return {
      test: false,
    }
  },

  methods: {
    ...mapActions([
      'toggleSidebarStatus',
    ]),
  },

  computed: {
    status: {
      get() {
        return this.isSidebarShown
      },
      set(value) {
        this.toggleSidebarStatus(value)
      },
    },
    ...mapGetters([
      'isSidebarShown',
    ]),
  },
}
</script>
