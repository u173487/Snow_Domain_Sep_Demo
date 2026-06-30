import '@servicenow/sdk/global';
import {Record} from "@servicenow/sdk/core";

const domainTableName = 'domain';

//Demo Domain Record
Record({
    $id: Now.ID[`${domainTableName}1`], //Returns sys_id 'ff3a82c360584d3cbd1b8018f857a2ae'.
    $meta: {installMethod: 'demo'},
    table: domainTableName,
    data: {
        name: 'DEMO',
        active: true,
        type: 'Customer',
        description: 'Domain for demo customers and demo data',
        parent: '774190f01f1310005a3637b8ec8b70ef', //Top domain sys id
        primary: false,
    }
})

const customerTableName = 'customer_account';

//Customers
Record({
    $id: Now.ID[`${customerTableName}1}`],
    $meta: { installMethod: 'demo' },
    table: customerTableName,
    data: {
        name: 'Parts Unlimited',
        sys_domain: Now.ID[`${domainTableName}1`, //This should work but does not. it returns the string 'domain1'
    }
})
Record({
    $id: Now.ID[`${customerTableName}2}`],
    $meta: { installMethod: 'demo' },
    table: customerTableName,
    data: {
        name: 'UniCo',
        sys_domain: 'ff3a82c360584d3cbd1b8018f857a2ae', //This works
    }
})