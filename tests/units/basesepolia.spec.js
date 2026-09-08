import Exchanges from 'src'
import { supported } from 'src/blockchains'

describe('basesepolia', () => {

  it('is supported but has no exchanges', () => {
    expect(supported).toContain('basesepolia')
    expect(supported.evm).toContain('basesepolia')
    expect(Exchanges.basesepolia).toEqual([])
  })

  it('route resolves to an empty list instead of throwing', async () => {
    const routes = await Exchanges.route({
      blockchain: 'basesepolia',
      tokenIn: '0x036CbD53842c5426634e7929541eC2318f3dCF7e',
      tokenOut: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      amountOutMin: '1000000',
      fromAddress: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
      toAddress: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
    })
    expect(routes).toEqual([])
  })
})
