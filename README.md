# Snow_Domain_Sep_Demo
Repo to reproduce domian record linking in fluent

I am attempting to create Demo data in a domain separated environment  by creating a DEMO domain and then creating customers for that domain:

The DEMO domain creates as expected:

``` jsx
const domainTableName = 'domain';

//Demo Domain Record
Record({
    $id: Now.ID[`${domainTableName}1`],  //Returns sys_id 'ff3a82c360584d3cbd1b8018f857a2ae'.
    $meta: { installMethod: 'demo' },
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
```

I then proceed to create 2 customer records:

``` jsx
const customerTableName = 'customer_account';

//Customers
Record({
    $id: Now.ID[`${customerTableName}1`],
    $meta: { installMethod: 'demo' },
    table: customerTableName,
    data: {
        name: 'Parts Unlimited',
        sys_domain: Now.ID[`${domainTableName}1`], // Returns string domain1
    }
})
Record({
    $id: Now.ID[`${customerTableName}2`],
    $meta: { installMethod: 'demo' },
    table: customerTableName,
    data: {
        name: 'UniCo',
        sys_domain: 'ff3a82c360584d3cbd1b8018f857a2ae', // Inserts the correct reference
    }
```

When i manually insert the Sys_ID the field reference creates as expected.

Has anyone seen this or found a workaround?
