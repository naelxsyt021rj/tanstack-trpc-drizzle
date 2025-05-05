CREATE TABLE `posts` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text(250),
	`deleted_at` text,
	`updated_at` text,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP)
);
