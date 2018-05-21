<template>
  <quill-editor v-model="content"
        ref="myQuillEditor"
        :options="editorOption"
        @blur="onEditorBlur($event)">
  </quill-editor>

</template>

<script>

// you can also register quill modules in the component

export default {
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
  mounted () {
    // console.log('this is current quill instance object', this.editor)
  },
  methods: {
    onEditorBlur (quill) {
      this.$emit('inputInfo', this.content)
    }
    // onEditorFocus (quill) {
    //   console.log('editor focus!', quill)
    // },
    // onEditorReady (quill) {
    //   console.log('editor ready!', quill)
    // }
  }

}
</script>
