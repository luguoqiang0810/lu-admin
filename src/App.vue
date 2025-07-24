<!--
 *                                                     __----~~~~~~~~~~~------___
 *                                    .  .   ~~//====......          __--~ ~~
 *                    -.            \_|//     |||\\  ~~~~~~::::... /~
 *                 ___-==_       _-~o~  \/    |||  \\            _/~~-
 *         __---~~~.==~||\=_    -_--~/_-~|-   |\\   \\        _/~
 *     _-~~     .=~    |  \\-_    '-~7  /-   /  ||    \      /
 *   .~       .~       |   \\ -_    /  /-   /   ||      \   /
 *  /  ____  /         |     \\ ~-_/  /|- _/   .||       \ /
 *  |~~    ~~|--~~~~--_ \     ~==-/   | \~--===~~        .\
 *           '         ~-|      /|    |-~\~~       __--~~
 *                       |-~~-_/ |    |   ~\_   _-~            /\
 *                            /  \     \__   \/~                \__
 *                        _--~ _/ | .-~~____--~-/                  ~~==.
 *                       ((->/~   '.|||' -_|    ~~-/ ,              . _||
 *                                  -_     ~\      ~~---l__i__i__i--~~_/
 *                                  _-~-__   ~)  \--______________--~~
 *                                //.-~~~-~_--~- |-------~~~~~~~~
 *                                       //.-~~~--\
 *                       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *                               神兽保佑            永无BUG
 -->
<script setup lang="ts">
	const AuxiliaryTool = import.meta.env.DEV
		? defineAsyncComponent(() => import('./../auxiliaryTool/index.vue'))
		: null;

	const appStore = useAppStore();
	const { layoutSetting } = storeToRefs(appStore);
	const { antd } = useI18nLocale();
</script>

<template>
	<a-config-provider
    :theme="{
      token: {
        colorPrimary: layoutSetting.colorPrimary,
        fontSize: layoutSetting.fontSize,
      }
    }"
    :locale="antd"
  >
		<a-app class="l-full">
			<a-layout class="l-h-100">
				<a-layout-header class="l-is-fixed t-0"> Header </a-layout-header>
				<a-layout-content>
					<div>
            <a-button type="primary">{{ layoutSetting.systemName }}</a-button>
          </div>
				</a-layout-content>
				<a-layout-footer class="l-is-fixed b-0"> Footer </a-layout-footer>
			</a-layout>
			<AuxiliaryTool />
		</a-app>
	</a-config-provider>
</template>

<style scoped lang="scss"></style>
