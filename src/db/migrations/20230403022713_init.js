// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.up = function(knex) {

// };

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.down = function(knex) {

// };
const CHECKRANGE = [1, 2, 3, 4, 5];
//
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema
    .createTable("job", (table) => {
      // job 테이블
      table.increments("job_id");
      table.string("job_name").notNullable();
    })
    .createTable("user_class", (table) => {
      // user_class 테이블
      table.increments("user_class_id");
      table.string("user_class_name").notNullable();
    })
    .createTable("profile", (table) => {
      // profile 테이블
      table.bigIncrements("profile_id");
      table.string("nick_name").notNullable();
      table.integer("user_class_id").unsigned();
      table.foreign("user_class_id").references("user_class.user_class_id");
      table.integer("job_id").unsigned();
      table.foreign("job_id").references("job.job_id");
    })
    .createTable("user", (table) => {
      // user 테이블
      table.bigIncrements("user_id");
      table.string("email").notNullable();
      table.string("password").notNullable();
      table.boolean("verified").notNullable().defaultTo("false");
      table.integer("profile_id").unsigned();
      table.foreign("profile_id").references("profile.profile_id");
    })
    .createTable("category", (table) => {
      // category 테이블
      table.increments("category_id");
      table.string("category_name").notNullable();
    })
    .createTable("post", (table) => {
      // post 테이블
      table.bigIncrements("post_id");
      table.string("title").notNullable();
      table.string("mention").notNullable();
      table.integer("view_count").defaultTo(0);
      table.integer("comment_count").defaultTo(0);
      table.integer("like_count").defaultTo(0);
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
      table.timestamp("deleted_at").nullable();
      table.integer("category_id").unsigned();
      table.foreign("category_id").references("category.category_id");
    })
    .createTable("student", (table) => {
      // student 테이블
      table.increments("student_id");
      table.string("student_class").notNullable();
    })
    .createTable("user_student", (table) => {
      // user_student 테이블
      table.increments("user_student_id");
      table.integer("student_id").unsigned();
      table.foreign("student_id").references("student.student_id");
      table.integer("profile_id").unsigned();
      table.foreign("profile_id").references("profile.profile_id");
    })
    .createTable("position", (table) => {
      // position 테이블
      table.increments("position_id");
      table.string("position_name").notNullable();
    })
    .createTable("user_position", (table) => {
      // user_position 테이블
      table.increments("user_position_id");
      table.integer("position_id").unsigned();
      table.foreign("position_id").references("position.position_id");
      table.integer("profile_id").unsigned();
      table.foreign("profile_id").references("profile.profile_id");
    })
    .createTable("major", (table) => {
      // major 테이블
      table.increments("major_id");
      table.string("major_name").notNullable();
    })
    .createTable("user_major", (table) => {
      // user_major 테이블
      table.increments("user_major_id");
      table.integer("major_id").unsigned();
      table.foreign("major_id").references("major.major_id");
      table.integer("profile_id").unsigned();
      table.foreign("profile_id").references("profile.profile_id");
    })
    .createTable("public", (table) => {
      // public 테이블
      table.increments("public_id");
      table.string("public_name").notNullable();
    })
    .createTable("user_public", (table) => {
      // user_public 테이블
      table.increments("user_public_id");
      table.integer("public_id").unsigned();
      table.foreign("public_id").references("public.public_id");
      table.integer("profile_id").unsigned();
      table.foreign("profile_id").references("profile.profile_id");
    })
    .createTable("school", (table) => {
      // school 테이블
      table.increments("school_id");
      table.string("school_name").notNullable();
    })
    .createTable("school_user", (table) => {
      // school_user 테이블
      table.increments("school_user_id");
      table.integer("school_id").unsigned();
      table.foreign("school_id").references("school.school_id");
      table.integer("profile_id").unsigned();
      table.foreign("profile_id").references("profile.profile_id");
    })
    .createTable("bucket", (table) => {
      // bucket 테이블
      table.increments("bucket_id");
      table.string("bucket_name");
    })
    .createTable("image", (table) => {
      // image 테이블
      table.increments("image_id");
      table.string("url").notNullable();
      table.integer("bucket_id").unsigned();
      table.foreign("bucket_id").references("bucket.bucket_id");
    })
    .createTable("school_image", (table) => {
      // school_image 테이블
      table.increments("school_image_id");
      table.integer("school_id").unsigned();
      table.foreign("school_id").references("school.school_id");
      table.integer("image_id").unsigned();
      table.foreign("image_id").references("image.image_id");
    })
    .createTable("industry", (table) => {
      // industry 테이블
      table.increments("industry_id");
      table.string("industry_name").notNullable();
    })
    .createTable("company", (table) => {
      // company 테이블
      table.increments("company_id");
      table.string("company_name").notNullable();
      table.integer("industry_id").unsigned();
      table.foreign("industry_id").references("industry.industry_id");
    })
    .createTable("email_valid", (table) => {
      // email_valid 테이블
      table.increments("email_valid_id");
      table.string("email_domain").notNullable();
      table.integer("company_id").unsigned();
      table.foreign("company_id").references("company.company_id");
    })
    .createTable("company_image", (table) => {
      // company_image 테이블
      table.increments("company_image_id");
      table.integer("company_id").unsigned();
      table.foreign("company_id").references("company.company_id");
      table.integer("image_id").unsigned();
      table.foreign("image_id").references("image.image_id");
    })
    .createTable("company_user", (table) => {
      // company_user 테이블
      table.increments("company_user_id");
      table.integer("profile_id").unsigned();
      table.foreign("profile_id").references("profile.profile_id");
      table.integer("company_id").unsigned();
      table.foreign("company_id").references("company.company_id");
    })
    .createTable("company_review", (table) => {
      // company_review 테이블
      table.increments("company_review_id");
      table.float("total_stars").notNullable().defaultTo(0);
      table.float("career_stars").notNullable().defaultTo(0);
      table.float("life_stars").notNullable().defaultTo(0);
      table.float("salary_stars").notNullable().defaultTo(0);
      table.float("culture_stars").notNullable().defaultTo(0);
      table.float("director_stars").notNullable().defaultTo(0);
      table.integer("company_id").unsigned();
      table.foreign("company_id").references("company.company_id");
    })
    .createTable("review", (table) => {
      // review 테이블
      table.increments("review_id");
      table
        .integer("total_stars")
        .unsigned()
        .notNullable()
        .defaultTo(1)
        .checkIn(CHECKRANGE);
      table
        .integer("career_stars")
        .unsigned()
        .notNullable()
        .defaultTo(1)
        .checkIn(CHECKRANGE);
      table
        .integer("life_stars")
        .unsigned()
        .notNullable()
        .defaultTo(1)
        .checkIn(CHECKRANGE);
      table
        .integer("salary_stars")
        .unsigned()
        .notNullable()
        .defaultTo(1)
        .checkIn(CHECKRANGE);
      table
        .integer("culture_stars")
        .unsigned()
        .notNullable()
        .defaultTo(1)
        .checkIn(CHECKRANGE);
      table
        .integer("director_stars")
        .unsigned()
        .notNullable()
        .defaultTo(1)
        .checkIn(CHECKRANGE);

      table.string("title").notNullable();
      table.string("positive_contents").notNullable().defaultTo("");
      table.string("negative_contents").notNullable().defaultTo("");
      table.integer("profile_id").unsigned();
      table.foreign("profile_id").references("profile.profile_id");
      table.integer("company_review_id").unsigned();
      table
        .foreign("company_review_id")
        .references("company_review.company_review_id");
    })
    .createTable("post_image", (table) => {
      // post_image 테이블
      table.increments("post_image_id");
      table.integer("post_id").unsigned();
      table.foreign("post_id").references("post.post_id");
      table.integer("image_id").unsigned();
      table.foreign("image_id").references("image.image_id");
    })
    .createTable("mention", (table) => {
      // mention 테이블
      table.increments("mention_id");
      table.string("mention_name").notNullable();
    })
    .createTable("post_mention", (table) => {
      // post_mention 테이블
      table.increments("post_mention_id");
      table.integer("post_id").unsigned();
      table.foreign("post_id").references("post.post_id");
      table.integer("mention_id").unsigned();
      table.foreign("mention_id").references("mention.mention_id");
    })
    .createTable("post_hashtag", (table) => {
      // post_hashtag 테이블
      table.increments("post_hashtag_id");
      table.integer("post_id").unsigned();
      table.foreign("post_id").references("post.post_id");
      table.integer("category_id").unsigned();
      table.foreign("category_id").references("category.category_id");
      table.integer("category_sub_id").unsigned();
    })
    .createTable("post_like", (table) => {
      // post_like 테이블
      table.increments("post_like_id");
      table.integer("post_id").unsigned();
      table.foreign("post_id").references("post.post_id");
      table.integer("profile_id").unsigned();
      table.foreign("profile_id").references("profile.profile_id");
    })
    .createTable("comment", (table) => {
      // comment 테이블
      table.increments("comment_id");
      table.string("content").notNullable();
      table.integer("parent_comment_id").nullable();
      table.integer("like_count").defaultTo(0);
      table.integer("comment_count").defaultTo(0);
      table.integer("post_id").unsigned();
      table.foreign("post_id").references("post.post_id");
      table.integer("profile_id").unsigned();
      table.foreign("profile_id").references("profile.profile_id");
    })
    .createTable("comment_like", (table) => {
      // comment_like 테이블
      table.increments("comment_like_id");
      table.integer("comment_id").unsigned();
      table.foreign("comment_id").references("comment.comment_id");
      table.integer("profile_id").unsigned();
      table.foreign("profile_id").references("profile.profile_id");
    })
    .createTable("comment_image", (table) => {
      // comment_image 테이블
      table.increments("comment_image_id");
      table.integer("comment_id").unsigned();
      table.foreign("comment_id").references("comment.comment_id");
      table.integer("image_id").unsigned();
      table.foreign("image_id").references("image.image_id");
    })
    .createTable("og", (table) => {
      // og 테이블
      table.increments("og_id");
      table.string("url").notNullable();
      table.string("og_title").notNullable();
      table.string("og_desc").notNullable();
      table.string("og_image_url").notNullable();
    });
}

// 롤백 - 마이그레이션 취소
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTableIfExists("job");
  await knex.schema.dropTableIfExists("user_class");
  await knex.schema.dropTableIfExists("profile");
  await knex.schema.dropTableIfExists("user");
  await knex.schema.dropTableIfExists("category");
  await knex.schema.dropTableIfExists("post");
  await knex.schema.dropTableIfExists("student");
  await knex.schema.dropTableIfExists("user_student");
  await knex.schema.dropTableIfExists("position");
  await knex.schema.dropTableIfExists("user_position");
  await knex.schema.dropTableIfExists("major");
  await knex.schema.dropTableIfExists("user_major");
  await knex.schema.dropTableIfExists("public");
  await knex.schema.dropTableIfExists("user_public");
  await knex.schema.dropTableIfExists("school");
  await knex.schema.dropTableIfExists("school_user");
  await knex.schema.dropTableIfExists("bucket");
  await knex.schema.dropTableIfExists("image");
  await knex.schema.dropTableIfExists("school_image");
  await knex.schema.dropTableIfExists("industry");
  await knex.schema.dropTableIfExists("company");
  await knex.schema.dropTableIfExists("email_valid");
  await knex.schema.dropTableIfExists("company_image");
  await knex.schema.dropTableIfExists("company_user");
  await knex.schema.dropTableIfExists("company_review");
  await knex.schema.dropTableIfExists("review");
  await knex.schema.dropTableIfExists("post_image");
  await knex.schema.dropTableIfExists("mention");
  await knex.schema.dropTableIfExists("post_mention");
  await knex.schema.dropTableIfExists("post_hashtag");
  await knex.schema.dropTableIfExists("post_like");
  await knex.schema.dropTableIfExists("comment");
  await knex.schema.dropTableIfExists("comment_like");
  await knex.schema.dropTableIfExists("comment_image");
  await knex.schema.dropTableIfExists("og");

}

/************************************************************
 * 파 일 명 : 20230403013515_init.js
 * 설    명 : postgresql database migrations file
 *
 * 수정일       수정자          Version      Description
 * ----------  --------------  ---------   -----------
 * 2023.04.03  정영훈           1.0         최초 생성
 * **********************************************************/
