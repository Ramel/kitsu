(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2745e2f2"],{"017b":function(e,t,i){},"3c33":function(e,t,i){"use strict";var o=i("017b"),n=i.n(o);n.a},"43e3":function(e,t,i){"use strict";var o=i("f547e"),n=i.n(o);n.a},6893:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"people page fixed-page"},[i("div",{staticClass:"flexrow page-header"},[i("page-title",{staticClass:"flexrow-item filler",attrs:{text:e.$t("people.title")}}),i("div",{staticClass:"flexrow-item"},[e.isCurrentUserAdmin?i("button-simple",{staticClass:"flexrow-item",attrs:{title:e.$t("main.csv.import_file"),"is-responsive":!0,icon:"upload"},on:{click:e.showImportModal}}):e._e(),i("button-href-link",{staticClass:"flexrow-item",attrs:{title:e.$t("main.csv.export_file"),icon:"download",path:"/api/export/csv/persons.csv"}}),e.isCurrentUserAdmin?i("button-link",{staticClass:"flexrow-item",attrs:{text:e.$t("people.new_person"),"is-responsive":!0,icon:"plus",path:"/people/new"}}):e._e()],1)],1),i("div",{staticClass:"flexrow"},[i("search-field",{ref:"people-search-field",staticClass:"search flexrow-item",attrs:{"can-save":!1,placeholder:"ex: John Doe"},on:{change:e.onSearchChange}})],1),i("people-list",{attrs:{entries:e.displayedPeople,"is-loading":e.isPeopleLoading,"is-error":e.isPeopleLoadingError}}),i("import-modal",{attrs:{active:e.modals.importModal,"is-loading":e.isImportPeopleLoading,"is-error":e.isImportPeopleLoadingError,"form-data":e.personCsvFormData,columns:e.csvColumns},on:{fileselected:e.selectFile,confirm:e.uploadImportFile,cancel:e.hideImportModal}}),i("edit-person-modal",{attrs:{active:e.isEditModalShown,"is-loading":e.loading.edit,"is-invite-loading":e.loading.invite,"is-create-invite-loading":e.loading.createAndInvite,"is-error":e.isEditLoadingError,"is-invitation-success":e.success.invite,"is-invitation-error":e.errors.invite,"cancel-route":"/people"},on:{confirm:e.confirmEditPeople,"confirm-invite":e.confirmCreateAndInvite,invite:e.confirmInvite}}),i("delete-modal",{attrs:{active:e.isDeleteModalShown,"is-loading":e.isDeleteLoading,"is-error":e.isDeleteLoadingError,"cancel-route":"/people",text:e.deleteText,"error-text":e.$t("people.delete_error")},on:{confirm:e.confirmDeletePeople}})],1)},n=[],s=(i("8e6e"),i("ac6a"),i("456d"),i("bd86")),r=i("2f62"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"data-list"},[i("div",{staticStyle:{overflow:"hidden"}},[i("table",{ref:"headerWrapper",staticClass:"table table-header"},[i("thead",[i("tr",[i("th",{staticClass:"name"},[e._v("\n            "+e._s(e.$t("people.list.name"))+"\n          ")]),i("th",{staticClass:"email"},[e._v("\n            "+e._s(e.$t("people.list.email"))+"\n          ")]),i("th",{staticClass:"phone"},[e._v("\n            "+e._s(e.$t("people.list.phone"))+"\n          ")]),i("th",{staticClass:"role"},[e._v("\n            "+e._s(e.$t("people.list.role"))+"\n          ")]),i("th",{staticClass:"actions"})])])])]),i("table-info",{attrs:{"is-loading":e.isLoading,"is-error":e.isError}}),i("div",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onBodyScroll,expression:"onBodyScroll"}],staticClass:"table-body"},[e.activePeople.length>0?i("table",{staticClass:"table splitted-table"},[i("tbody",[i("tr",{staticClass:"type-header"},[i("td",{attrs:{colspan:"30"}},[e._v("\n            "+e._s(e.$t("people.active"))+"\n          ")])]),e._l(e.activePeople,(function(t){return i("tr",{key:t.id},[i("people-name-cell",{staticClass:"name",attrs:{person:t}}),i("td",{staticClass:"email"},[e._v(e._s(t.email))]),i("td",{staticClass:"phone"},[e._v(e._s(t.phone))]),i("td",{staticClass:"role"},[e._v(e._s(e.$t("people.role."+t.role)))]),e.isCurrentUserAdmin?i("row-actions",{attrs:{"entry-id":t.id,"edit-route":{name:"edit-person",params:{person_id:t.id}},"delete-route":{name:"delete-person",params:{person_id:t.id}}}}):i("td",{staticClass:"actions"})],1)}))],2)]):e._e(),e.unactivePeople.length>0?i("table",{staticClass:"table splitted-table"},[i("tbody",[i("tr",{staticClass:"type-header"},[i("td",{attrs:{colspan:"30"}},[e._v("\n            "+e._s(e.$t("people.unactive"))+"\n          ")])]),e._l(e.unactivePeople,(function(t){return i("tr",{key:t.id},[i("people-name-cell",{staticClass:"name",attrs:{person:t}}),i("td",{staticClass:"email"},[e._v(e._s(t.email))]),i("td",{staticClass:"phone"},[e._v(e._s(t.phone))]),i("td",{staticClass:"role"},[e._v(e._s(e.$t("people.role."+t.role)))]),e.isCurrentUserAdmin?i("row-actions",{attrs:{"entry-id":t.id,"edit-route":{name:"edit-person",params:{person_id:t.id}},"delete-route":{name:"delete-person",params:{person_id:t.id}}}}):i("td",{staticClass:"actions"})],1)}))],2)]):e._e()]),e.isLoading?e._e():i("p",{staticClass:"has-text-centered footer-info"},[e._v("\n    "+e._s(e.entries.length)+" "+e._s(e.$tc("people.persons",e.entries.length))+"\n  ")])],1)},l=[],c=i("7365"),d=i("03b1"),p=i("e60b");function f(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function m(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?f(i,!0).forEach((function(t){Object(s["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):f(i).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var u={name:"people-list",components:{PeopleNameCell:c["a"],RowActions:d["a"],TableInfo:p["a"]},props:["entries","isLoading","isError","onEditClicked","onDeleteClicked"],computed:m({},Object(r["c"])(["isCurrentUserAdmin"]),{activePeople:function(){return this.entries.filter((function(e){return e.active}))},unactivePeople:function(){return this.entries.filter((function(e){return!e.active}))}}),methods:m({},Object(r["b"])([]),{taskColor:function(e){return e<1||e>4?"red":""},onBodyScroll:function(e,t){this.$refs.headerWrapper.style.left="-".concat(t.scrollLeft,"px")}})},h=u,v=(i("df59"),i("2877")),b=Object(v["a"])(h,a,l,!1,null,"767854e4",null),_=b.exports,g=i("5f48"),C=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:{modal:!0,"is-active":e.active}},[i("div",{staticClass:"modal-background"}),i("div",{staticClass:"modal-content"},[i("div",{staticClass:"box"},[void 0!==e.personToEdit.id?i("h1",{staticClass:"title"},[e._v("\n        "+e._s(e.$t("people.edit_title"))+" "+e._s(e.personName)+"\n      ")]):i("h1",{staticClass:"title"},[e._v("\n        "+e._s(e.$t("people.new_person"))+"\n      ")]),i("form",{on:{submit:function(e){e.preventDefault()}}},[i("text-field",{ref:"name-field",attrs:{label:e.$t("people.fields.first_name"),disabled:e.isLdap},on:{enter:function(t){return e.confirmClicked()}},model:{value:e.form.first_name,callback:function(t){e.$set(e.form,"first_name",t)},expression:"form.first_name"}}),i("text-field",{attrs:{label:e.$t("people.fields.last_name"),disabled:e.isLdap},on:{enter:function(t){return e.confirmClicked()}},model:{value:e.form.last_name,callback:function(t){e.$set(e.form,"last_name",t)},expression:"form.last_name"}}),i("text-field",{attrs:{label:e.$t("people.fields.email"),disabled:e.isLdap},on:{enter:function(t){return e.confirmClicked()}},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),i("text-field",{attrs:{label:e.$t("people.fields.phone")},on:{enter:function(t){return e.confirmClicked()}},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}}),i("combobox",{attrs:{label:e.$t("people.fields.role"),options:e.roleOptions,localeKeyPrefix:"people.role."},on:{enter:function(t){return e.confirmClicked()}},model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}}),i("combobox",{attrs:{label:e.$t("people.fields.active"),options:e.activeOptions},on:{enter:function(t){return e.confirmClicked()}},model:{value:e.form.active,callback:function(t){e.$set(e.form,"active",t)},expression:"form.active"}})],1),i("p",{staticClass:"has-text-right"},[e.isCreating&&e.isCurrentUserAdmin?i("button",{class:{button:!0,"is-primary":!0,"is-loading":e.isCreateInviteLoading},attrs:{disabled:!e.isValidEmail},on:{click:e.createAndInvite}},[e._v("\n          "+e._s(e.$t("people.create_invite"))+"\n        ")]):e.isCurrentUserAdmin?i("button",{class:{button:!0,"is-primary":!0,"is-loading":e.isInviteLoading},attrs:{disabled:!e.isValidEmail},on:{click:e.invite}},[e._v("\n          "+e._s(e.$t("people.invite"))+"\n        ")]):e._e(),i("a",{class:{button:!0,"is-primary":!0,"is-loading":e.isLoading},attrs:{disabled:!e.isValidEmail},on:{click:e.confirmClicked}},[e._v("\n          "+e._s(e.$t("main.confirmation"))+"\n        ")]),i("router-link",{staticClass:"button is-link",attrs:{to:e.cancelRoute}},[e._v("\n          "+e._s(e.$t("main.cancel"))+"\n        ")])],1),e.isInvitationSuccess?i("div",{staticClass:"success has-text-right mt1"},[e._v("\n        "+e._s(e.$t("people.invite_success"))+"\n      ")]):e._e(),e.isInvitationError?i("div",{staticClass:"error has-text-right mt1"},[e._v("\n        "+e._s(e.$t("people.invite_error"))+"\n      ")]):e._e()])])])},P=[],E=i("7bf8"),O=i("992f");function w(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function $(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?w(i,!0).forEach((function(t){Object(s["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):w(i).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var y={name:"edit-modal",props:["onConfirmClicked","text","active","cancelRoute","isLoading","isCreateInviteLoading","isInvitationSuccess","isInvitationError","isInviteLoading","isError","errorText"],data:function(){return{isValidEmail:!1,form:{first_name:"",last_name:"",email:"",phone:"",role:"user",active:"true"},roleOptions:[{label:"user",value:"user"},{label:"manager",value:"manager"},{label:"admin",value:"admin"},{label:"client",value:"client"}],activeOptions:[{label:this.$t("main.yes"),value:"true"},{label:this.$t("main.no"),value:"false"}]}},components:{TextField:E["a"],Combobox:O["a"]},computed:$({},Object(r["c"])(["isLdap","isCurrentUserAdmin","personToEdit","people"]),{isCreating:function(){return void 0===this.personToEdit.id},personName:function(){return void 0!==this.personToEdit?this.personToEdit.first_name+" "+this.personToEdit.last_name:""}}),methods:$({},Object(r["b"])([]),{createAndInvite:function(){this.$emit("confirm-invite",this.form)},invite:function(){this.$emit("invite",this.form)},confirmClicked:function(){this.form.active="true"===this.form.active||!0===this.form.active,this.form.email&&this.$emit("confirm",this.form)},resetForm:function(){this.personToEdit&&(this.form={first_name:this.personToEdit.first_name,last_name:this.personToEdit.last_name,phone:this.personToEdit.phone,email:this.personToEdit.email,role:this.personToEdit.role,active:!this.personToEdit.id||this.personToEdit.active?"true":"false"}),this.checkEmailValidity()},checkEmailValidity:function(){var e=this,t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,i=this.people.some((function(t){return t.email===e.form.email&&(!e.personToEdit||e.personToEdit.email!==t.email)}));this.isValidEmail=this.form.email&&t.test(this.form.email)&&!i}}),watch:{personToEdit:function(){this.resetForm()},active:function(){var e=this;this.active&&(this.resetForm(),setTimeout((function(){e.$refs["name-field"].focus()}),100))},"form.email":function(){this.checkEmailValidity()}}},x=y,I=(i("43e3"),Object(v["a"])(x,C,P,!1,null,"14075986",null)),k=I.exports,j=i("440f"),L=i("e211"),D=i("9355"),M=i("de40"),T=i("8d07"),S=i("4d04");function A(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function F(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?A(i,!0).forEach((function(t){Object(s["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):A(i).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var N={name:"people",components:{ButtonLink:L["a"],ButtonHrefLink:D["a"],ButtonSimple:M["a"],EditPersonModal:k,DeleteModal:g["a"],ImportModal:j["a"],PageTitle:T["a"],PeopleList:_,SearchField:S["a"]},data:function(){return{errors:{invite:!1},loading:{createAndInvite:!1,edit:!1,invite:!1},modals:{importModal:!1},success:{invite:!1},csvColumns:["First Name","Last Name","Email","Phone"]}},created:function(){var e=this;this.loadPeople((function(){e.handleModalsDisplay()}))},watch:{$route:function(e,t){this.handleModalsDisplay()}},computed:F({},Object(r["c"])(["displayedPeople","isPeopleLoading","isPeopleLoadingError","isImportPeopleModalShown","isImportPeopleLoading","isImportPeopleLoadingError","isEditModalShown","isEditLoading","isEditLoadingError","isDeleteModalShown","isDeleteLoading","isDeleteLoadingError","isImportModalShown","isImportLoading","isImportLoadingError","personToDelete","personCsvFormData","personToEdit","isCurrentUserAdmin"]),{deleteText:function(){var e=this.personToDelete;if(void 0!==e){var t="".concat(e.first_name," ").concat(e.last_name);return this.$t("people.delete_text",{personName:t})}return""}}),methods:F({},Object(r["b"])(["invitePerson","editPerson","newPerson","newPersonAndInvite","loadPeople","peopleSearchChange"]),{uploadImportFile:function(){var e=this;this.$store.dispatch("uploadPersonFile",(function(t){t||(e.$store.dispatch("loadPeople"),e.hideImportModal())}))},addPersonFilter:function(e){},removePersonFilter:function(e){},confirmEditPeople:function(e){var t=this,i="editPerson";void 0===this.personToEdit.id&&(i="newPerson"),this.loading.edit=!0,this[i](e).then((function(){t.$router.push("/people"),t.loading.edit=!1})).catch((function(){t.loading.edit=!1}))},confirmCreateAndInvite:function(e){var t=this;this.loading.createAndInvite=!0,this.newPersonAndInvite(e).then((function(){t.loading.createAndInvite=!1,t.$router.push("/people")})).catch((function(){t.loading.createAndInvite=!1}))},confirmInvite:function(e){var t=this;this.loading.invite=!0,this.invitePerson(e).then((function(){t.loading.invite=!1,t.success.invite=!0,t.errors.invite=!1})).catch((function(){t.loading.invite=!1,t.success.invite=!1,t.errors.invite=!0}))},confirmDeletePeople:function(){var e=this;this.$store.dispatch("deletePeople",(function(t){t||e.$router.push("/people")}))},selectFile:function(e){this.$store.commit("PERSON_CSV_FILE_SELECTED",e)},showDeleteModalIfNeeded:function(e,t){e.indexOf("delete")>0?this.$store.dispatch("showPersonDeleteModal",t):this.$store.dispatch("hidePersonDeleteModal",t)},showEditModalIfNeeded:function(e,t){this.errors.invite=!1,this.success.invite=!1,e.indexOf("new")>0?this.$store.dispatch("showPersonEditModal"):e.indexOf("edit")>0?this.$store.dispatch("showPersonEditModal",t):this.$store.dispatch("hidePersonEditModal",t)},handleModalsDisplay:function(){var e=this.$store.state.route.path,t=this.$store.state.route.params.person_id;this.showDeleteModalIfNeeded(e,t),this.showEditModalIfNeeded(e,t)},onSearchChange:function(){this.peopleSearchChange(this.$refs["people-search-field"].getValue())},showImportModal:function(){this.modals.importModal=!0},hideImportModal:function(){this.modals.importModal=!1}}),metaInfo:function(){return{title:"".concat(this.$t("people.title")," - Kitsu")}}},V=N,U=(i("3c33"),Object(v["a"])(V,o,n,!1,null,"26da8e78",null));t["default"]=U.exports},b782:function(e,t,i){},df59:function(e,t,i){"use strict";var o=i("b782"),n=i.n(o);n.a},f547e:function(e,t,i){}}]);
//# sourceMappingURL=chunk-2745e2f2.43cb5820.js.map