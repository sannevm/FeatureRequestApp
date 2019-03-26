﻿// <auto-generated />
using FeatureRequestAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace FeatureRequestAPI.Migrations
{
    [DbContext(typeof(FeatureRequestAPIContext))]
    partial class FeatureRequestAPIContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.3-rtm-10026")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("FeatureRequestAPI.Models.FeatureRequestItem", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("AddedToBacklog");

                    b.Property<string>("Comment");

                    b.Property<string>("Description");

                    b.Property<bool>("IsDone");

                    b.Property<string>("Name");

                    b.Property<int>("NumberOfVotes");

                    b.HasKey("Id");

                    b.ToTable("FeatureRequestItem");
                });
#pragma warning restore 612, 618
        }
    }
}
