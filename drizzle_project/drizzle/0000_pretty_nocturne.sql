CREATE TABLE "users" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"age" integer NOT NULL,
	"email" varchar(255) NOT NULL,
	"isActive" boolean DEFAULT true,
	"createdAt" "cal::local_datetime" DEFAULT now(),
	"updateAt" "cal::local_datetime" DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
