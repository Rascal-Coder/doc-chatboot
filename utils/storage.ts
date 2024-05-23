import { createStorage } from '@rascal/utils'

export const localStg = (useEncryption?: boolean) => createStorage<StorageType.Local>('local', useEncryption)

export const sessionStg = (useEncryption?: boolean) => createStorage<StorageType.Session>('session', useEncryption)
