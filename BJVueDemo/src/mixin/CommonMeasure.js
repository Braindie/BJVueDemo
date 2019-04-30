export const measure = {
    created() {
        console.log('混入对象的钩子被调用');
    },
    methods: {
        // 弹框 —— toast
        toast(val) {
            this.$vux.toast.show({
                text: val.text,
                time: val.time || 2000,
                position: val.position || 'middle',
                type: 'text',
                width: val.width || '7.6em',
                isShowMask: val.mask || false
            });            
        },

        // 去除空格
        deletespace(str) {
            return str.toString().replace(new regExp('', 'g'), '').toString();
        }
    },
}