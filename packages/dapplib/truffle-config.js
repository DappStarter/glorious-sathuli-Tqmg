require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remind history inner dry force spray'; 
let testAccounts = [
"0x27e1c5a850df5c95fb25576551dc0af389ea458277b176947c7cfaa3d3a99fed",
"0x71197f59af0117068bbe4368f51a8eeff319e8409ba3368db76af05b21b271e4",
"0xf611fbb2635a04600401a958e7cdc93db7c4f73022625e0f30178ba4dd3b3a74",
"0x39fb4f7c66a3199e42edb72c7390bbbbbc1e64ee4b2bd3511d90ed0f0a06236e",
"0x868f69e41293c9310837a349042bfae115c30405997967ae86ae3fd5daec50e1",
"0xfbb4562955c0cd5383f8d92883348192f7bacd35d74e5b16511acdb28cb4029b",
"0xee218866928683b03644325d966f3718e135044e0e22f7d030198afab7a2b70b",
"0x6c11c65a22760fe92094219b5acbcb008fa8aca7e6c78eb21c536b61dad04b89",
"0xad638d45f2e362975cb67ea68b02c5349c4a381f1e29a2470988c0d70c7b64c3",
"0xfe307faa2dac3caf5c62f26151a2149d4ebcf1223502badf2aef42b9270cd906"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


