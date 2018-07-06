<template>
  	<div class="login_page fillcontain">
	  	<transition name="form-fade" mode="in-out">
	  		<section class="form_contianer" v-show="showLogin">
		  		<div class="manage_tip">
		  			<p>后台管理系统</p>
		  		</div>
		    	<el-form :model="loginForm" :rules="rules" ref="loginForm">
					<el-form-item prop="username">
						<el-input v-model="loginForm.username" placeholder="用户名"><span></span></el-input>
					</el-form-item>
					<el-form-item prop="password">
						<el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
					</el-form-item>
					<el-form-item>
				    	<el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
				  	</el-form-item>
				</el-form>
				<p class="tip">温馨提示：请仔细核对密码后登入</p>
	  		</section>
	  	</transition>
  	</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
			return {
				loginForm: {
					username: '',
					password: ''
				},
				rules: {
					username: [
			            { required: true, message: '请输入用户名', trigger: 'blur' },
						{ min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
			        ],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					],
				},
				showLogin: true,
			}
		},
		methods : {
			submitForm(loginForm){
				this.$refs[loginForm].validate((valid) => {
					if (valid){
						
						this.$router.push('manage')
						this.$message({
		                        type: 'success',
														message: '登录成功',
														offset: 10
		                    });
						
						// let userinfo = this.loginForm;
						// let data = {
						// 	url:''
						// }
						// let userData = Object.assign(userinfo, data);
						// console.log(userData)
						// 	axios.post('/user', {
						// 			firstName: 'Fred',
						// 			lastName: 'Flintstone'
						// 		})
						// 		.then(function (response) {
						// 			console.log(response);
						// 		})
						// 		.catch(function (error) {
						// 			console.log(error);
						// 		});

						// axios({
            //       type:'post',
            //       path:'/api/user/login',
            //       data:userData,
            //       fn:data=>{
						// 		console.log(data);
						// 		if(data.status == 1){
						// 			//this.saveUserInfo()  存入缓存，用于显示用户名
						// 			//this.generateMenuPushIndex() 模拟动态生成菜单并定位到index
						// 			//this.$store.dispatch('initLeftMenu'); 设置左边菜单始终为展开状态

						// 		}else{
						// 			this.$message.error('登录失败请重试')
						// 		}

						// 	}
						// })
					}else{
						this.$notify.error({
							title: '错误',
							message: '请输入正确的用户名密码',
							offset: 10})
					}
				})
			}
		}
}
</script>

<style lang="less" scoped>
	@import '../style/mixin';
	.login_page{
		background-color: #324057;
	}
	.manage_tip{
		position: absolute;
		width: 100%;
		top: -100px;
		left: 0;
		p{
			font-size: 34px;
			color: #fff;
		}
	}
	.form_contianer{
		.wh(320px, 210px);
		.ctp(320px, 210px);
		margin-left: -185px;
		padding: 25px;
		border-radius: 5px;
		text-align: center;
		background-color: #fff;
		.submit_btn{
			width: 100%;
			font-size: 16px;
		}
	}
	.tip{
		font-size: 12px;
		color: red;
		position: absolute;
		left: 10%;
	}
	.form-fade-enter-active, .form-fade-leave-active {
	  	transition: all 1s;
	}
	.form-fade-enter, .form-fade-leave-active {
	  	transform: translate3d(0, -50px, 0);
	  	opacity: 0;
	}
</style>