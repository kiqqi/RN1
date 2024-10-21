const path = require('path');
const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
    const {
        resolver: { sourceExts, assetExts }
    } = await getDefaultConfig();

    return {
        transformer: {
            babelTransformerPath: require.resolve('react-native-web')
        },
        resolver: {
            assetExts: assetExts.filter(ext => ext !== 'svg'),
            sourceExts: [...sourceExts, 'jsx', 'js', 'ts', 'tsx', 'web.js']
        },
    };
})();
