Cloudmesh Drive
===

## Cloud Providers

### Azure Blob Storage

See Libcloud's [Azure Blobs Storage Driver Documentation](https://libcloud.readthedocs.io/en/latest/storage/drivers/azure_blobs.html) for instructions on how to setup a storage account and generate access keys.

### Google Cloud Storage

See Libcloud's [Google Storage Driver Documentation](https://libcloud.readthedocs.io/en/latest/storage/drivers/google_storage.html) for instructions on how to setup a storage account and generate access keys.

## TODO
- [ ] Read config settings from cmdrive.yaml in addition to environ. Which wins if both are present?
- [ ] Get more clarity on command line api
- [ ] See what to do about policies
- [ ] Consider merging the db and cloud provider base classes
- [ ] MongoDB database provider
- [ ] Google Drive integration
- [ ] Box integration
- [ ] AWS integration
- [ ] Local storage service for keeping some things on the local host. Would also be a helpful default for testing purposes.

## Design Questions

**Should directories in the cloud providers be virtual or literal directories?**

**More broadly, should all list and traversal commands come through an abstraction layer?**
