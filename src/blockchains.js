/*#if _EVM

let supported = ['ethereum', 'bsc', 'polygon', 'fantom', 'arbitrum', 'avalanche', 'gnosis', 'optimism', 'base', 'worldchain', 'basesepolia']
supported.evm = ['ethereum', 'bsc', 'polygon', 'fantom', 'arbitrum', 'avalanche', 'gnosis', 'optimism', 'base', 'worldchain', 'basesepolia']
supported.svm = []

/*#elif _SVM

let supported = ['solana']
supported.evm = []
supported.svm = ['solana']

//#else */

let supported = ['ethereum', 'bsc', 'polygon', 'solana', 'fantom', 'arbitrum', 'avalanche', 'gnosis', 'optimism', 'base', 'worldchain', 'basesepolia']
supported.evm = ['ethereum', 'bsc', 'polygon', 'fantom', 'arbitrum', 'avalanche', 'gnosis', 'optimism', 'base', 'worldchain', 'basesepolia']
supported.svm = ['solana']

//#endif

export { supported }
