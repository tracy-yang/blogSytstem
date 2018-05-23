<template>
  <quill-editor v-model="content"
        ref="myQuillEditor"
        :options="editorOption"
        @change="onEditorChange($event)"
        >
  </quill-editor>
<!--        @blur="onEditorBlur($event)"-->
</template>

<script>

// you can also register quill modules in the component

export default {
  props:['contentInfo'],
  data () {
    return {
      content: '',
      editorOption: {
        placeholder: '请输入文章内容……'
      }
    }
  },
  computed: {
    editor () {
      return this.$refs.myQuillEditor.quill
    }
  },
  watch:{
    contentInfo:{
      handler: function (val, oldVal) {
        if(val){
          this.content = val;
        }
      },
      immediate: true
    }
  },
  mounted () {
    // console.log('this is current quill instance object', this.editor)
  },
  methods: {
    // onEditorBlur (quill) {
    //   console.log(this.content)
    //   this.$emit('inputInfo', this.content)
    // },
    // onEditorFocus (quill) {
    //   console.log('editor focus!', quill)
    // },
    // onEditorReady (quill) {
    //   console.log('editor ready!', quill)
    // },
    onEditorChange ({ quill, html, text }) {
      // console.log('editor change!', quill, html, text)
      this.content = html
      this.$emit('inputInfo', this.content)
    }
  }

}
</script>
