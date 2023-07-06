import react from '@vitejs/plugin-react';
import pkg from './package.json';
import dayjs from 'dayjs';
import { type ConfigEnv, loadEnv, type UserConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import { resolve } from 'path';

// 当前执行node命令时文件夹的地址
const root: string = process.cwd();

// 打包后静态资源的存放路径
const assetsDir = 'assets';
const { dependencies, devDependencies, name, version } = pkg;
const appVersion = dayjs().format('YYYYMMDDHHmm');
const lastBuildTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  version: appVersion,
  lastBuildTime
};
export default ({ command, mode }: ConfigEnv): UserConfig => {
  // 环境变量
  const env = loadEnv(mode, root);
  console.log(`========== ${pkg.name} ${command} S ==========`);
  console.log(`[lastBuildTime ${__APP_INFO__.lastBuildTime}]`);
  console.log(`[env: ${env.VITE_APP_ENV}]`);
  console.log(`[proxy: ${env.VITE_PROXY_TARGET}]`);
  console.log(`========== ${pkg.name} ${command} E ==========`);

  return {
    base: '/',
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, 'src')
        }
      ]
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    },
    server: {
      host: true,
      port: Number(env.VITE_PORT),
      proxy: {
        '/dev-api': {
          target: env.VITE_PROXY_TARGET,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/dev-api/, '')
        }
      }
    },

    plugins: [
      react(),

      svgrPlugin({
        svgrOptions: {
          icon: true
        }
      })
    ],
    build: {
      assetsDir: assetsDir,
      sourcemap: false,
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          entryFileNames: `${assetsDir}/js/[name].${appVersion}.js`,
          chunkFileNames: `${assetsDir}/js/[name].${appVersion}.js`,
          assetFileNames: `${assetsDir}/static/[name].${appVersion}.[ext]`
        }
      }
    }
  };
};
