<template>
  <v-toolbar dark color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">
      {{ title }}
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <template v-if="$auth.check()">
        <v-menu
          v-model="popovers.profile"
          offset-y
          transition="slide-y-transition"
        >
          <template v-slot:activator="{ on }">
            <v-btn
              flat
              v-on="on"
            >
              {{ $auth.user().name }}
            </v-btn>
          </template>
          <v-list>
            <v-list-tile @click="">
              <v-list-tile-title>
                Profile
              </v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="">
              <v-list-tile-title>
                Settings
              </v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="onLogoutClick">
              <v-list-tile-title >
                Logout
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </template>

      <template v-else>
        <v-menu
          v-model="popovers.login"
          :close-on-content-click="false"
          :nudge-width="150"
          offset-y
          transition="slide-y-transition"
        >
          <template v-slot:activator="{ on }">
            <v-btn
              flat
              v-on="on"
            >
              Login
            </v-btn>
          </template>

          <v-card>
            <v-list>
              <v-list-tile class="mt-3">
                <v-text-field
                  v-model="form.email"
                  label="E-mail"
                  required
                >
                </v-text-field>
              </v-list-tile>

              <v-list-tile>
                <v-text-field
                  v-model="form.password"
                  type="password"
                  label="Password"
                  required
                >
                </v-text-field>
              </v-list-tile>
            </v-list>

            <v-card-actions class="pb-2">

              <v-btn
                color="primary"
                @click="onLoginClick"
                class="ml-2"
              >
                Log in
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                flat
                class="mr-2"
                @click="popovers.login = false"
              >
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>

        <v-menu
          v-model="popovers.signup"
          :close-on-content-click="false"
          :nudge-width="150"
          offset-y
          transition="slide-y-transition"
        >
          <template v-slot:activator="{ on }">
            <v-btn
              flat
              v-on="on"
            >
              Sign up
            </v-btn>
          </template>

          <v-card>
            <v-list>
              <v-list-tile class="mt-3">
                <v-text-field
                  v-model="form.name"
                  label="Name"
                  required
                >
                </v-text-field>
              </v-list-tile>

              <v-list-tile>
                <v-text-field
                  v-model="form.email"
                  label="E-mail"
                  required
                >
                </v-text-field>
              </v-list-tile>

              <v-list-tile>
                <v-text-field
                  v-model="form.password"
                  type="password"
                  label="Password"
                  required
                >
                </v-text-field>
              </v-list-tile>
            </v-list>

            <v-card-actions class="pb-2">

              <v-btn
                color="primary"
                @click="onSignupClick"
                class="ml-2"
              >
                Sign up
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                flat
                class="mr-2"
                @click="popovers.signup = false"
              >
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>

      </template>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TheHeader',

  data() {
    return {
      title: 'TestSuite',
      form: {
        name: '',
        email: '',
        password: '',
      },
      popovers: {
        login: false,
        profile: false,
        signup: false,
      },
    }
  },

  computed: {
    ...mapGetters([
      'user',
    ]),
  },

  methods: {
    ...mapActions([
      'updateLoggedUser',
    ]),

    onLoginClick() {
      this.$auth.login({
        data: this.form,
        rememberMe: true,
      })
      this.popovers.login = false
    },

    onSignupClick() {
      this.$auth.register({
        data: this.form,
        rememberMe: true,
        autoLogin: true,
        redirect: {
          name: 'home',
        },
      })
      this.popovers.signup = false
    },

    onLogoutClick() {
      this.$auth.logout()
      this.popovers.profile = false
    },
  },
}
</script>
