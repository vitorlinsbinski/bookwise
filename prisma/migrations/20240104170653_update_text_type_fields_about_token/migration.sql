-- AlterTable
ALTER TABLE `accounts` MODIFY `refresh_token` LONGTEXT NULL,
    MODIFY `access_token` LONGTEXT NULL,
    MODIFY `id_token` LONGTEXT NULL;
