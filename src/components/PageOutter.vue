<template>
  <div class="flex justify-center">
    <div class="flex flex-col sm:w-auto lg:w-5/12">
      <h5 class="text-sm font-headline">Document Name</h5>
      <input type="text" name="document-title" class="font-headline mb-8 mt-2 outline-none bg-gray-300 border-b-2 border-indigo-600" v-model="documentTitle">
      <mc-wysiwyg v-model="content" class="bg-white"></mc-wysiwyg>
      <button @click="generateReport" class="h-12 bg-blue-600 text-white my-5 hover:outline-none hover:bg-blue-700 transition duration-700 ease-in-out">Save {{ documentTitle }} as PDF</button>
    <div class="mt-4 text-center">
      <p class="text-center text-xs inline-block">Made with ❤️ by <a class="italic" href="https://github.com/dandheedge" target="_blank">Damarrama</a></p>
    </div>
    <div class="mt-4 text-center">
      <p class="text-center text-xs inline-block">Icons made by <a href="https://www.flaticon.com/authors/tomas-knop" title="Tomas Knop">Tomas Knop</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
    </div>
    <vue-html2pdf
    :show-layout="false"
    :float-layout="true"
    :enable-download="true"
    :preview-modal="true"
    :paginate-elements-by-height="1400"
    :filename="documentTitle"
    :pdf-quality="1.8"
    :manual-pagination="false"
    pdf-format="a4"
    pdf-orientation="portrait"
    pdf-content-width="100%"
    ref="html2Pdf"
    >
    <section class="py-8 px-12" slot="pdf-content">
      <div v-html="content"></div>
    </section>
  </vue-html2pdf>
  </div>
</div>
</template>

<script>
import { McWysiwyg } from '@mycure/vue-wysiwyg';
import VueHtml2pdf from 'vue-html2pdf';
export default {
  name: 'PageOutter',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      documentTitle: "Untitled",
      content: "",
      pdfConfig: {

      }
    }
  },
  methods: {
    generateReport () {
      this.$refs.html2Pdf.generatePdf()
    }
  },
  components: {
    McWysiwyg,
    VueHtml2pdf
  }
};
</script>