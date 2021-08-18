
<template>
  <v-row justify="center">
    <v-btn color="green lighten-2" dark="" @click.stop="dialog = true">
      Click Here!!
    </v-btn>
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="headline">忍者CODE</v-card-title>
        <v-card-text>
          <h3 style="margin: 10px 0;">自分なりの理論を組み立てろ!!</h3>
          <p>■  HTML&CSS/</p>
          <p>■  Javascript</p>
          <p>■  jQuery</p>
          <p>■  模写コーディング</p>
          <p>■  sass</p>
          <p>■  PHP</p>
          <p>■  Git</p>
          <p>■  Vue</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text="" @click="dialog = false">
            戻る
          </v-btn>
          <v-btn color="green darken-1" text="" @click="dialog = false">
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>