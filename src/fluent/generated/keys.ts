import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    customer_account1: {
                        table: 'customer_account'
                        id: 'ff3a82c360584d3cbd1b8018f857a2ae'
                    }
                    customer_account2: {
                        table: 'customer_account'
                        id: '2cfe588f58d4460d8e900839c9f18d09'
                    }
                    customer_account3: {
                        table: 'customer_account'
                        id: '9dc36863dac94c28ab87c7ad90a86954'
                    }
                    domain1: {
                        table: 'domain'
                        id: '7dfa7c36eb8b4765a0285e9ab20ec7d0'
                    }
                }
            }
        }
    }
}
